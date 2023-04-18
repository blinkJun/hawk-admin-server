import { Sequelize, Model } from 'sequelize';
import { baseFileds } from '../migrations/create-admins'

enum Status {
    normal=1,
    warning=0
}

class Admin extends Model {
    declare id:number
    declare name:string
    declare password:string
    declare head_pic:string
    declare role_id:number
    declare dept_id:number
    declare phone_number:number
    declare email:string
    declare status:Status
}

const tableName = 'admins'

export default (sequelize: Sequelize): typeof Admin => {
    Admin.init(
        {
            ...baseFileds
        },
        {
            tableName: tableName,
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            sequelize, // passing the `sequelize` instance is required
        },
    );
    return Admin
}