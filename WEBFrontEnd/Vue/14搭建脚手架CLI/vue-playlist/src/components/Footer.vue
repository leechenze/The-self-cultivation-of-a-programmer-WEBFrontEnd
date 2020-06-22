<template>
  <div id="footer">
      {{copyright}} === {{tip}}
  </div>
</template>

<script>
export default {
    name: 'app-footer',
    props: {
        tip: {
            type: String,
            required: true,
        }
    },
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