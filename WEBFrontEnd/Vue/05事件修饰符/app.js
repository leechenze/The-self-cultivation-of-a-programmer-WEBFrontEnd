// 实例化VUE对象
new Vue({
    el: "#vue-app",
    data: {
        age: 30,
        x: 0,
        y: 0
    },
    methods: {
        add: function (inc) {
            this.age += inc;
        },  
        subtract: function (dec) {
            console.log('asdf');
            this.age -= dec;
        },
        updataXY: function(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        stopMoving: function (event) {
            event.cancelBubble = true;
        },
        preventEvent: function () {
            alert('leechense');
        }
    }
})