// 实例化VUE对象
new Vue({
    el: "#vue-app",
    data: {
        name: "leechense",
        job: 'WEB开发',
    },
    methods: {
        greet: function (time) {
            return 'good ' + time + ' ' + this.name + ' !!!';
        }
    }
})