<template>
    <div id="product-list-two">
        <h1>Product List Two</h1>
        <ul>
            <li v-for="(product, ind) in saleProducts" :key="ind">
                <span class="name">{{product.name}}</span>
                <span class="price">${{product.price}}</span>
            </li>
        </ul>
        <button @click="reducePrice(20)">身价降低</button>
    </div>
</template>

<script>
export default {
    name: "productListTwo",
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
        saleProducts() {
            return this.$store.getters.saleProducts;
        }
    },
    methods: {
        reducePrice(amount) {
            // 触发 mutaions
            // this.$store.commit('reducePrice');
            // 触发 actions
            this.$store.dispatch('reducePrice', amount);
        }
    }
};
</script>

<style scoped>

</style>