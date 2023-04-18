'use strict';

const tableName = 'roles'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface) {
        await queryInterface.bulkInsert(tableName, [
            {
                name: '管理员',
                auth_list:'[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]',
                remark:'拥有所有权限'
            }
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
