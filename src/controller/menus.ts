import {Context} from 'koa'
import {Controller} from '../decorators/controller'
import {GET, POST} from '../decorators/methods'
import {Validator,validators} from '../decorators/validator'
import {Auth} from '../decorators/permissions'
import {MenuModel,AdminModel} from '../db/index'

const validateConfig = {
    name:{
        type:'string',
        required:true,
    },
    level:{
        validator:validators.number,
        required:true
    },
    parent_id:{
        validator:validators.number,
        required:true
    },
    authorize_key:{
        validator:'string',
        required:true
    }
}

@Controller('/menus')
export default class Index {
    @GET('/list')
    @Auth('system:menu')
    @Validator({
        page:{
            validator:validators.number,
            required:true
        },
        limit:{
            validator:validators.number,
            required:true
        }
    })
    async list(ctx:Context):Promise<void>{
        const {page,limit} = ctx.request.query
        const options = {
            offset:Number(page)>0?Number(page)-1:0,
            limit:Number(limit)||9999,
            where:<any>{},
            attributes:{
                exclude:[],
                include:[]
            }
        };
        const list = await MenuModel.findAndCountAll({
            ...options,
            // 排序
            order: [['created_at', 'DESC']]
        })
        ctx.success('获取成功！',list)
    }

    @POST('/create')
    @Auth('system:menu:create')
    @Validator(validateConfig)
    async create(ctx:Context):Promise<void>{
        try{
            const postData = ctx.request.body as any
            await MenuModel.create(postData);
            ctx.success('添加成功！')
        }catch(err:any){
            ctx.fail(`添加失败:${err.message}`)
        }
    }

    @POST('/update')
    @Auth('system:menu:update')
    @Validator({
        ...validateConfig,
        id:{
            validator:validators.number,
            required:true,
        }
    })
    async update(ctx:Context):Promise<void>{
        try{
            const postData = ctx.request.body as any
            const {id} = postData

            // 删除id
            delete postData.id

            await MenuModel.update(postData,{
                where:{
                    id
                }
            });
            ctx.success('更新成功！')
        }catch(err:any){
            ctx.fail(`更新失败:${err.message}`)
        }
    }

    @POST('/delete')
    @Auth('system:menu:del')
    @Validator({
        id:{
            validator:validators.number,
            required:true,
        }
    })
    async delete(ctx:Context):Promise<void>{
        try{
            const postData = ctx.request.body as any
            const id = postData.id

            const clientUser = ctx.state.user
            const user = await AdminModel.findByPk(clientUser.id);
            const menu = await MenuModel.findByPk(id)

            // 顶级菜单不可删除
            if(menu?.static===1){
                ctx.fail('不可删除顶级菜单')
                return 
            }

            // 管理员才可删除
            if(user){
                const isAdmin = Number(user.role_id) === 1
                if(!isAdmin){
                    ctx.fail('您无此权限操作，请使用管理员账户删除')
                    return
                }
            }else{
                ctx.fail('无此用户')
                return 
            }


            
            await MenuModel.destroy({
                where:{
                    id
                }
            })
            ctx.success('删除成功！')
        }catch(err:any){
            ctx.fail(`删除失败:${err.message}`)
        }
    }
}