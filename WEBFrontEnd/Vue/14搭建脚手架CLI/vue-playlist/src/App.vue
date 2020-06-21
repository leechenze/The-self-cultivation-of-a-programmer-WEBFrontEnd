<template>
  <div id="app">
    <!-- <router-view/> -->
    <v-header></v-header>
    <Users></Users>
    <v-footer></v-footer>
  </div>
</template>

<script>
import Users from '@/components/Users';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export default {
  name: "App",
  data() {
    return {
    //   title: "this is Vue cli"
    };
  },
  components:{
    "Users": Users,
    "v-footer": Footer,
    "v-header": Header,
  }
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
