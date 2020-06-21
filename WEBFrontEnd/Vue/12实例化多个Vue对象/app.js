var one = new Vue({
    el: "#vue-app-one",
    data: {
        title: 'app one内容'
    },
    methods: {
        
    },
    computed: {
        greet() {
            return 'hellow clinton';
        }
    }
})
var two = new Vue({
    el: "#vue-app-two",
    data: {
        title: 'app two内容'
    },
    methods: {
        changeTitle() {
            one.title = "在two中更改了one的title";
        }
    },
    computed: {
        greet() {
            return 'hellow clinton';
        }
    }
})


two.title = '初始化时更改了two的title';