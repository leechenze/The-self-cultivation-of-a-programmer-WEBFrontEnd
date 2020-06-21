// 实例化VUE对象
new Vue({
    el: "#vue-app",
    data: {
        name: '',
        age: '',
    },
    methods: {
        logName: function () {
            // console.log(this.$refs);
            this.name = this.$refs.name.value;
        },
        logAge: function () {
            // console.log(this.$refs);
            this.age = this.$refs.age.value;
        }
    }
})