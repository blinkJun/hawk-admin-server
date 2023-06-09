/*
 * @Author liangjun
 * @LastEditors liangjun
 * @Date 2021-01-25 21:40:16
 * @LastEditTime 2021-06-05 17:54:01
 * @Description 参数验证修饰器
 */
import 'reflect-metadata';
import { Context } from 'koa';
import Scheme,{RuleItem} from 'async-validator'

export const validatorMetaKey = Symbol('validator')

export type ValidateHandler = (ctx:Context,discirptor:Descriptor) => Promise<any[]|undefined>

export interface Descriptor {
  [propName:string]:any
}
export interface ValidateData {
  [propName:string]:any
}


// 添加元数据
export const Validator = function(descriptor:Descriptor):PropertyDecorator{
    return (target,propertyKey)=>{
        Reflect.defineMetadata(validatorMetaKey,descriptor,target,propertyKey)
    }
}
// 获取元数据
export const getValidetorDescriptor = function(target:()=>any,propertyKey:string):Descriptor{
    return Reflect.getMetadata(validatorMetaKey,target,propertyKey)
}

// 进行验证
export const validate = async function(descriptor:Descriptor,data:ValidateData):Promise<any> {
    const validator = new Scheme(descriptor)
    const validateResult = await validator.validate(data);
    return validateResult
}

// 该如何进行验证
export const validateHandler:ValidateHandler = async function(ctx:Context,descriptor?:Descriptor){
    if(descriptor){
        // 需要验证的参数
        let data = {}

        if(ctx.method==='GET'){
            data = JSON.parse(JSON.stringify(ctx.query))
        }
        
        if(ctx.method==='POST'){
            data = ctx.request.body
        }

        try{
            await validate(descriptor,data)
        }catch(err:any){
            console.log(err)
            return err.errors
        }
    }
}

export const validators = {
    number:(rule:RuleItem, value:any|null, callback:(error:Error|void)=>void):void => {
        if (isNaN(Number(value))) {
            rule.message = '请输入数字';
            callback(new Error())
        } else {
            callback()
        }
    },
    array:(rule:RuleItem, value:any|null, callback:(error:Error|void)=>void):void => {
        if (!Array.isArray(value)) {
            rule.message = '请提交数组';
            callback(new Error())
        } else {
            callback()
        }
    }
}