<template>
  <div id="footer">
      {{copyright}}
  </div>
</template>

<script>
export default {
    name: 'app-footer',
    data() {
        return {
            copyright: 'Copyright 2020 vue demo',
        }
    }

};
</script>

<style scoped>
#footer{
    text-align: center;
    background-color: #555;
    height: 80px;
    line-height: 80px;
    color: greenyellow;
}
</style>