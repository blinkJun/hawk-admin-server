/*
 * @Author liangjun
 * @LastEditors liangjun
 * @Date 2021-02-02 17:42:51
 * @LastEditTime 2023-04-17 18:17:39
 * @Description 开发环境配置
 */
import {MysqlConfig,ServerConfig,JWTCofig,CorsConfig} from './index'
import mysqlConfig from '../db/config/config.json'

export const mysql:MysqlConfig = mysqlConfig.development

export const server:ServerConfig = {
    host:'127.0.0.1',
    port:5301
}

export const jwt:JWTCofig = {
    secrect:'hawk-admin-dev'
}

export const cors:CorsConfig = {
    whiteList:['http://localhost:5173']
}