# `hawk-admin-server`

- 基于[`koa-ts-starter`](https://github.com/blinkJun/koa-ts-starter)后台服务模板
- 该项目与[`hawk-admin`](https://github.com/blinkJun/hawk-admin)前端项目组合使用，提供了后台项目的基础功能。

## 使用
1. 安装依赖：`npm i`

2. [安装`mysql`](https://www.runoob.com/mysql/mysql-install.html)
   
3. 配置数据库：在`\src\db\config\config.json`配置环境对应的数据库表参数

4. 初始化数据库

    ```bash
    # 进入数据库管理文件夹
    cd /src/db
    # 迁移：初始化表
    npx sequelize-cli db:migrate
    # 迁移：初始化种子数据
    npx sequelize-cli db:seed:all
    ```

    > 可通过此方式运行对应环境的迁移：`npx cross-env NODE_ENV=test sequelize-cli db:seed:all`

5. 启动项目：`npm run dev`

> 如果前端项目启动后是以`ip`的形式查看页面，则需要进入`/src/config/config.development.ts`或对应的环境配置下配置`cors`，添加白名单，以解决前端跨域访问问题

6. 登录`hawk-admin`，默认账户密码为：`admin`/`admin`