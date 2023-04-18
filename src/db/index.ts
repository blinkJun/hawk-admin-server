/*
 * @Author liangjun
 * @LastEditors liangjun
 * @Date 2021-02-02 14:38:18
 * @LastEditTime 2023-04-17 14:35:16
 * @Description 
 */
import {Sequelize} from 'sequelize'
import AdminModelCreate from './models/admin'
import DeptsModelCreate from './models/depts'
import MenuModelCreate from './models/menu'
import RoleModelCreate from './models/role'
import config from '../config/index'

const {
    username,
    password,
    host,
    database
} = config.mysql

const sequelize = new Sequelize(`mysql://${username}:${password}@${host}:3306/${database}`);

export const AdminModel = AdminModelCreate(sequelize)
export const DeptsModel = DeptsModelCreate(sequelize)
export const MenuModel = MenuModelCreate(sequelize)
export const RoleModel = RoleModelCreate(sequelize)
