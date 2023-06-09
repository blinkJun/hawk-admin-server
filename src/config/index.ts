/*
 * @Author liangjun
 * @LastEditors liangjun
 * @Date 2021-02-02 17:45:16
 * @LastEditTime 2023-04-17 14:32:49
 * @Description 选取对应的配置
 */
import * as development from './config.development'
import * as production from './config.production'

export interface MysqlConfig {
    username:string,
    password : string,
    host : string,
    database : string
}
export interface ServerConfig {
    host:string,
    port:number
}

export interface JWTCofig {
    secrect:string
}

export interface CorsConfig {
    whiteList:string[]
}

export interface Config {
    mysql:MysqlConfig,
    server:ServerConfig,
    jwt:JWTCofig,
    cors:CorsConfig
}

interface ConfigEnvMap {
    development:Config
    [propName:string]:Config
}

const configEnvMap:ConfigEnvMap = {
    development,
    production
}

declare const process : {
    env: {
        NODE_ENV: string
    }
}
const env:string = process.env['NODE_ENV']
const config:Config = configEnvMap[env]

export default config