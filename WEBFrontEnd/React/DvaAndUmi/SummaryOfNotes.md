## 博学之, 审问之, 慎思之, 明辨之, 笃行之;
## 壹、贰、叁、肆、伍、陆、柒、捌、玖、拾;

---   

## Umi搭建项目首页;

创建项目: DvaAndUmi
mkdir DvaAndUmi && cd DvaAndUmi

创建项目应用
yarn create @umijs/umi-app

依赖安装
yarn or yarn install

启动项目
yarn start


修改为约定式路由:
官网有说明: **如果没有routes配置, Umi会进入约定式路由,** 然后分析 src/pages 目录拿到路由配置;

Umi中在 .umirc.ts 和 config/config.js 中配置项目和插件;

routes配置是在 .umirc.ts 配置文件中, 打开后删除关于routes的配置即可进入约定式路由;

Umi内部集成了插件形式的AntD组件库, 拿来即用, 无需下载;

使用CSS: Umi 中约定 src/global.css 为全局样式，如果存在此文件，会被自动引入到入口文件最前面.

global.css样式默认是不存在的; 手动创建后, 因为是全局文件, 所以需要重启项目;










---
## Umi与Dva结合传递仓库数据;
---
## Dva中的Model结构;
---
## 后台接口获取数据;
---
