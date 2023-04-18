/*
 * @Author liangjun
 * @LastEditors liangjun
 * @Date 2021-02-02 17:44:35
 * @LastEditTime 2023-04-17 14:32:26
 * @Description 正式环境配置
 */
import {MysqlConfig,ServerConfig,JWTCofig,CorsConfig} from './index'
import mysqlConfig from '../db/config/config.json'

export const mysql:MysqlConfig = mysqlConfig.development

export const server:ServerConfig = {
    host:'0.0.0.0',
    port:5301
}

export const jwt:JWTCofig = {
    secrect:'hawk-admin-prod'
}

export const cors:CorsConfig = {
    whiteList:['http://120.24.43.205','http://sunrise.tojike.com']
}