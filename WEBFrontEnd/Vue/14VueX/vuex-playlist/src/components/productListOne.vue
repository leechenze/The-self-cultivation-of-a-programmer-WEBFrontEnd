<template>
    <div id="product-list-one">
        <h1>Product List One</h1>
        <ul>
            <li v-for="(product, ind) in saleProducts" :key="ind">
                <span class="name">{{product.name}}</span>
                <span class="price">${{product.price}}</span>
            </li>
        </ul>
        <button @click="reducePrice(10)">身价降低</button>
    </div>
</template>

<script>

import {mapGetters, mapActions} from 'vuex';

export default {
    name: "productListOne",
    // props: {
    //     products:{
    //         type: Array,
    //         required: true,
    //     }
    // },
    data() {
        return {

        }
    },
    computed: {
        products() {
            return this.$store.state.products;
        },
        // saleProducts() {
        //     return this.$store.getters.saleProducts;
        // }
        // 使用辅助函数mapGetters;
        ...mapGetters([
            "saleProducts"
        ])
    },
    methods: {
        // reducePrice(amount) {
        //     this.$store.dispatch('reducePrice', amount);
        // }
        ...mapActions([
            "reducePrice"
        ])
    }
};
</script>

<style scoped>

</style>