<template>
  <div id="home">
    <v-header :tip="tip" @changeTip="updataTip($event)"></v-header>
    <Users :users="users"></Users>
    <Users :users="users"></Users>
    <v-footer :tip="tip"></v-footer>
  </div>
</template>

<script>
import Users from "./Users";
import Header from "./Header";
import Footer from "./Footer";

export default {
  name: "Home",
  data() {
    return {
      tip: "传值测试",
      title: "this is Vue cli",
      users: [
        { name: "LinColn", position: "lawyer", show: false },
        { name: "LinColn", position: "lawyer", show: false },
        { name: "LinColn", position: "lawyer", show: false },
        { name: "LinColn", position: "lawyer", show: false },
        { name: "LinColn", position: "lawyer", show: false },
        { name: "LinColn", position: "lawyer", show: false },
        { name: "LinColn", position: "lawyer", show: false },
        { name: "LinColn", position: "lawyer", show: false },
        { name: "LinColn", position: "lawyer", show: false },
        { name: "LinColn", position: "lawyer", show: false },
        { name: "LinColn", position: "lawyer", show: false }
      ]
    };
  },
  components: {
    Users: Users,
    "v-footer": Footer,
    "v-header": Header
  },
  methods: {
    updataTip(tip) {
      this.tip = tip;
    }
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
