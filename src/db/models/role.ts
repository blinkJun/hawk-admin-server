import { Sequelize, Model } from 'sequelize';
import { baseFileds } from '../migrations/create-role'

class Role extends Model {
    declare id:number
    declare name:string
    declare auth_list:string
    declare remark:string
}

const tableName = 'roles'

export default (sequelize: Sequelize): typeof Role => {
    Role.init(
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
    return Role
}