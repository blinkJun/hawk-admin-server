'use strict';

const tableName = 'menus'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface) {
        await queryInterface.bulkInsert(tableName, [
            {
                name: '主系统',
                level: 0,
                authorize_key: '',
                parent_id: null,
                static: 1
            },
            {
                name: '系统管理',
                level: 1,
                authorize_key: 'system',
                parent_id: 1,
                static: 1
            },
            {
                name: '管理员管理',
                level: 2,
                authorize_key: 'system:admin',
                parent_id: 2,
                static: 1
            },
            {
                name: '菜单管理',
                level: 2,
                authorize_key: 'system:menu',
                parent_id: 2,
                static: 1
            },
            {
                name: '角色管理',
                level: 2,
                authorize_key: 'system:role',
                parent_id: 2,
                static: 1
            },
            {
                name: '部门管理',
                level: 2,
                authorize_key: 'system:dept',
                parent_id: 2,
                static: 1
            },
            {
                name: '新增',
                level: 3,
                authorize_key: 'system:admin:create',
                parent_id: 3,
                static: 1
            },
            {
                name: '修改',
                level: 3,
                authorize_key: 'system:admin:update',
                parent_id: 3,
                static: 1
            },
            {
                name: '删除',
                level: 3,
                authorize_key: 'system:admin:del',
                parent_id: 3,
                static: 1
            },
            {
                name: '新增',
                level: 3,
                authorize_key: 'system:menu:create',
                parent_id: 4,
                static: 1
            },
            {
                name: '修改',
                level: 3,
                authorize_key: 'system:menu:update',
                parent_id: 4,
                static: 1
            },
            {
                name: '删除',
                level: 3,
                authorize_key: 'system:menu:del',
                parent_id: 4,
                static: 1
            },
            {
                name: '新增',
                level: 3,
                authorize_key: 'system:role:create',
                parent_id: 5,
                static: 1
            },
            {
                name: '修改',
                level: 3,
                authorize_key: 'system:role:update',
                parent_id: 5,
                static: 1
            },
            {
                name: '删除',
                level: 3,
                authorize_key: 'system:role:del',
                parent_id: 5,
                static: 1
            },
            {
                name: '新增',
                level: 3,
                authorize_key: 'system:dept:create',
                parent_id: 6,
                static: 1
            },
            {
                name: '修改',
                level: 3,
                authorize_key: 'system:dept:update',
                parent_id: 6,
                static: 1
            },
            {
                name: '删除',
                level: 3,
                authorize_key: 'system:dept:del',
                parent_id: 6,
                static: 1
            },
        ], {});
    },

    async down(queryInterface) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete(tableName, null, {});
    }
};
