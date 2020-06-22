<template>
  <div id="header" @click="changeTip">
      {{title}} === {{tip}}
  </div>
</template>

<script>
export default {
    name: 'app-header',
    props: {
        tip: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            title: 'Vue.js Demo',
        }
    },
    methods: {
        changeTip() {
            // this.tip = 'change Tip at header'
            // 事件传值;
            this.$emit('changeTip', 'HeaderVue子组件向AppVue父组件传值');
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