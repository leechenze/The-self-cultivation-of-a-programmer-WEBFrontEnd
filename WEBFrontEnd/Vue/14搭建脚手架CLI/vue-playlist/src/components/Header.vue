<template>
  <div id="header">
      {{title}}
  </div>
</template>

<script>
export default {
    name: 'app-header',
    data() {
        return {
            title: 'Vue.js Demo',
        }
    }

};
</script>

<style scoped>
#header{
    text-align: center;
    background-color: green;
    height: 80px;
    line-height: 80px;
    color: #000;
}
</style>