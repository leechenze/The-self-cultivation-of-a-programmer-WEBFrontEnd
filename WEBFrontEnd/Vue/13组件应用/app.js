// 解释为何组件中的data必须是方法返回对象的形式;
// var data = {
//     name: 'clinton'
// }

Vue.component("greeting",{
    template: `
        <div id="root-tag">
            <span>{{name}}: 大家好, 给大家介绍下我的女朋友@关晓彤</span>
            <button @click="changeName">改名</button>
        </div>
    `,
    // data: {
    //     name: "clinton",
    // },
    // 固定写法否则报错;
    data() {
        return {
            name: '鹿晗',
        }
    },
    methods: {
        changeName() {
            this.name = "lincoln";
        }
    }
})

new Vue({
    el: "#vue-app-one",
    
})

new Vue({
    el: "#vue-app-two",

})
