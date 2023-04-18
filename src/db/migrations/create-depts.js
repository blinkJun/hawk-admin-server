const {DataTypes} = require('sequelize')

const tableName = 'depts'

const baseFileds = {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.BIGINT,
    },
    parent_id: {
        type: DataTypes.BIGINT,
        comment: '父级id'
    },
    name: {
        type: DataTypes.STRING,
        comment: '名称'
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