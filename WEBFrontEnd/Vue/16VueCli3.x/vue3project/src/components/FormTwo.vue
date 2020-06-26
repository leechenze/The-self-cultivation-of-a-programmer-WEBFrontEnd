<template>
  <div id="form-two">
      <FormHelper>
          <h1 slot="title">{{title}}</h1>
          <h2 slot="text">这是动态组件二的测试文本内容</h2>
      </FormHelper>
  </div>
</template>

<script>

import FormHelper from "./FormHelper";

export default {
    name: "form-two",
    data() {
        return {
            title: "form组件二",
        }
    },
    components: {
        FormHelper,
    }
};
</script>

<style scoped>
h1{
    color: firebrick;
}

h2{
    background-color: greenyellow;
}


#form-two{
    height: 450px;
}
</style>