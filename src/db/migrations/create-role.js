const { DataTypes } = require('sequelize')

const tableName = 'roles'

const baseFileds = {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.BIGINT,
    },
    name: {
        type: DataTypes.STRING,
        comment: '名称'
    },
    auth_list: {
        type: DataTypes.STRING,
        comment: '角色对应菜单id列表'
    },
    remark: {
        type: DataTypes.STRING,
        comment:'角色说明'
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
        await queryInterface.createTable(tableName, baseFileds);
    },
    async down(queryInterface) {
        await queryInterface.dropTable(tableName);
    }
};