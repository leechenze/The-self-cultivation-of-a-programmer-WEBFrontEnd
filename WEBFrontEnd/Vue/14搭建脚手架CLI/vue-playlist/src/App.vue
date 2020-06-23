<template>
  <div id="app">
      <ul>
          <li><router-link to="/">home</router-link></li>
          <li><router-link to="/helloworld">helloworld</router-link></li>
      </ul>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
        
    };
  },
  components: {
      
  },
  methods: {
      
  },

    // beforeCreate() {
    //     alert("组件实例化之前或者创建之前, 页面未显示");
    // },
    // created() {
    //     alert('组件创建完成, 页面未显示');
    // },
    // beforeMount() {
    //     alert("组件挂载之前, 编译Template");
    // },
    // mounted() {
    //     alert('组件挂载完成, DOM渲染中');
    // },
    // beforeUpdate() {
    //     alert("DOM发生更新前, 页面已显示");
    // },
    // updated() {
    //     alert('DOM发生更新完成, 页面已显示');
    // },
    // beforeDestroy() {
    //     alert("组件销毁前");
    // },
    // destroyed() {
    //     alert('组件销毁完成');
    // },

};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 30px;
}
</style>
