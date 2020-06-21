// 实例化VUE对象
new Vue({
    el: "#vue-app",
    data: {
        a: 0,
        b: 0,
        age: 20
    },
    methods: {
        // addToA() {
        //     console.log('addToAFn')
        //     return this.a + this.age;
        // },
        // addToB() {
        //     console.log('addToBFn')
        //     return this.b + this.age;
        // },
        // test() {
        //     console.log('this is testFn');
        // }
    },
    computed: {
        addToA() {
            console.log('addToAFn')
            return this.a + this.age;
        },
        addToB() {
            console.log('addToBFn')
            return this.b + this.age;
        },
        
    }
})