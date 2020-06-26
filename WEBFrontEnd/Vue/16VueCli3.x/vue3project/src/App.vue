<template>
  <div id="app">
      <!-- slot插槽 -->
      <!-- <FormHelper>
          <h1 slot="title">{{title}}</h1>
          <h2 slot="text">这是一段测试 文本内容</h2>
      </FormHelper> -->

    

        <!-- 动态组件 -->
        <keep-alive>
            <component :is="component"></component>
        </keep-alive>
        <button @click="component = 'form-one'">form-one</button>
        <button @click="component = 'form-two'">form-two</button>
  </div>
</template>

<script>
// import FormHelper from "./components/FormHelper";


import FormOne from "./components/FormOne";
import FormTwo from "./components/FormTwo";


export default {
  name: 'App',
  data() {
      return {
          title: "slot插槽",
          component: "form-one",
      }
  },
  components: {
    //   FormHelper,
    FormOne,
    FormTwo
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
