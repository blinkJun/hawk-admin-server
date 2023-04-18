const {DataTypes} = require('sequelize')

const tableName = 'menus'

const baseFileds = {
    id:{
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.BIGINT,
    },
    name:{
        type:DataTypes.STRING,
        comment:'名称',
    },
    level:{
        type:DataTypes.TINYINT,
        comment:'菜单级别'
    },
    parent_id:{
        type:DataTypes.TINYINT,
        comment:'父级'
    },
    authorize_key:{
        type:DataTypes.STRING,
        comment:'授权码'
    },
    static:{
        type:DataTypes.TINYINT,
        comment:'是否是主菜单'
    },
    created_at: {
        type: DataTypes.DATE,
        comment:'创建时间'
    },
    updated_at: {
        type: DataTypes.DATE,
        comment:'更新时间'
    }
}

exports.baseFileds = baseFileds

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    baseFileds,
    async up(queryInterface) {
        await queryInterface.createTable(tableName,baseFileds );
    },
    async down(queryInterface) {
        await queryInterface.dropTable(tableName);
    }
};