import { Sequelize, Model } from 'sequelize';
import { baseFileds } from '../migrations/create-menu'

class Menu extends Model {
    declare id:number
    declare name:string
    declare level:number
    declare authorize_key:string
    declare parent_id:number | null
    declare static:number | null
}

const tableName = 'menus'

export default (sequelize: Sequelize): typeof Menu => {
    Menu.init(
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
    return Menu
}