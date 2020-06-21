// 实例化VUE对象
new Vue({
    el: "#vue-app",
    data: {
        
    },
    methods: {
        logName: function () {
            console.log('清除入你的名字');
        },
        logAge: function () {
            console.log('请输入你的年龄');
        }
    }
})