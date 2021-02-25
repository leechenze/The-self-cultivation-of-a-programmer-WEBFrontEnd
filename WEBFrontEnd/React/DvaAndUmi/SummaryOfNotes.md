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

global.css样式默认是不存在的; 手动创建后, 因为是全局文件, 所以需要重启项目后生效;

---
## Umi与Dva结合传递仓库数据;
Umi中默认集成了Dva的插件: @umijs/plugin-dva

import { connect } from 'umi';  现在connect需要从umi中引入;

model结构介绍:

1. namespace: 模块名称,
2. state:  数据定义,
3. effects:    异步方法,
4. reducers:   同步方法,
5. subscription:  语义是订阅，用于订阅一个数据源，然后根据条件 dispatch 需要的 action。数据源可以是当前的时间、服务器的 websocket 连接、keyboard 输入、geolocation 变化、history 路由变化等等。


index.tsx中的Table数据放在了reducer中,
然后通过subscription监听路由路径, 触发对应的effects(异步)或reducers(同步)方法, 这些方法中返回Table数据, 数据名称就是namespace, 之后在index.tsx中引入 connect 连接到 model;

    import { connect } from 'umi'

    export default connect(mapStateToProps)(index);
    
实际上但路由进入到此页面时 会被subscription监听
返回对应的数据, 在index.tsx中 进行对应连接;
需要注意的是 mapStateToProps 的参数既是 namespace, 名字不可有差错

    const mapStateToProps = ({ users }) => {
        return {
            users,
        }
    }

    export default connect(mapStateToProps)(index);

此时在组件函数上拿到参数:

    const index = ({users}) => {
        // ...组件内容中使用users;
    }

---
## Dva中的Model结构;

同上一章, 规定Typescript接口;

    import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';

    interface UserModelType {
        namespace: 'users',
        state: {},
        reducers: {
            getList: Reducer,
        },
        effects: {},
        subscriptions: {
            setup: Subscription
        },
    }

    const UserModel: UserModelType = {
        namespace: 'users',
        state: {
        },
        reducers: {
            getList(state, { type, payload }) {
                const data = [
                    {
                        key: '1',
                        name: 'John Brown',
                        age: 32,
                        address: 'New York No. 1 Lake Park',
                        tags: ['nice', 'developer'],
                    },
                    {
                        key: '2',
                        name: 'Jim Green',
                        age: 42,
                        address: 'London No. 1 Lake Park',
                        tags: ['loser'],
                    },
                    {
                        key: '3',
                        name: 'Joe Black',
                        age: 32,
                        address: 'Sidney No. 1 Lake Park',
                        tags: ['cool', 'teacher'],
                    },
                ];
                return data;
            }
        },
        effects: {
            
        },
        subscriptions: {
            setup({ dispatch, history }) {
                return history.listen(({ pathname }, action) => {
                    if (pathname === '/users') {
                        dispatch({
                            type: 'getList'
                        })
                    }
                })
            }
        }
    }
    export default UserModel;

---
## 后台接口获取数据;


---
