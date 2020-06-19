// 实例化VUE对象
new Vue({
    el: "#vue-app",
    data: {
        age: 30,
    },
    methods: {
        add: function (inc) {
            this.age += inc;
        },
        subtract: function (dec) {
            console.log('asdf');
            this.age -= dec;
        }
    }
})