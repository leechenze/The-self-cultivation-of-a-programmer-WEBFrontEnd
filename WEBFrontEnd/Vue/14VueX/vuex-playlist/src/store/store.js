import Vue from 'vue';
import Vuex from 'vuex';




Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        products: [
            {name: '柳传志', price: 200},
            {name: '马云', price: 140},
            {name: '马化腾', price: 130},
            {name: '李彦宏', price: 20},
        ]
    },
    getters:{
        saleProducts(state) {
            var saleProducts = state.products.map((item, ind) => {
                console.log('mutations中的方法执行影响了getters操作products数据');
                return {
                    name: '**' + item.name + '**',
                    price: item.price / 2,
                }
            })
            return saleProducts;
        }
    },
    mutations: {
        // reducePrice(state) {
        //     setTimeout(() => {
        //         state.products.forEach((product,ind) => {
        //             product.price -= 1;
        //         })
        //     }, 1000);
        // }
        reducePrice(state, payload) {
            state.products.forEach((product,ind) => {
                product.price -= payload;
            })
        }
    },
    actions: {
        reducePrice(context, payload) {
            setTimeout(() => {
                context.commit('reducePrice', payload);
            }, 1000);
        }
    }
})

export default store;