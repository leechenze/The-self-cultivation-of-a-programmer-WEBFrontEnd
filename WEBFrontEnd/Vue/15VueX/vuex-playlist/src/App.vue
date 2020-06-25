<template>
  <div id="app">
      <!-- 通过父子组件传递数据 -->
      <!-- <product-list-one :products="products"></product-list-one>
      <product-list-two :products="products"></product-list-two> -->
      <!-- 通过store获取, 不再通过父子组件传值获取数据 -->
      <product-list-one ></product-list-one>
      <product-list-two ></product-list-two>
    </div>
</template>

<script>
import ProductListOne from './components/productListOne'
import ProductListTwo from './components/productListTwo'

export default {
  name: 'app',
  data () {
    return {
        // products: [
        //     {name: '柳传志', price: 200},
        //     {name: '马云', price: 140},
        //     {name: '马化腾', price: 130},
        //     {name: '李彦宏', price: 20},
        // ]
    }
  },
  components: {
      'product-list-one': ProductListOne,
      'product-list-two': ProductListTwo,
  }
}
</script>

<style scoped>
    
</style>
