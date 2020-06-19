// 实例化VUE对象
new Vue({
    el: "#vue-app",
    data: {
        name: "leechense",
        job: 'WEB开发',
        website: 'https://www.leechenze.com/subset/index.html',
        websiteTag: '<a href="https://www.leechenze.com/subset/index.html">newLeechense</a>',

    },
    methods: {
        greet: function (time) {
            return 'good ' + time + ' ' + this.name + ' !!!';
        }
    }
})