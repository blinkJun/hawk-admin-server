import { Sequelize, Model } from 'sequelize';
import { baseFileds } from '../migrations/create-depts'

class Dept extends Model {
    declare id:number
    declare parent_id:number|null
    declare name:string
}

const tableName = 'depts'

export default (sequelize: Sequelize): typeof Dept => {
    Dept.init(
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
    return Dept
}