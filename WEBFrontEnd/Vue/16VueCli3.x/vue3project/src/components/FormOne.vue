<template>
  <div id="form-one">
      
      <FormHelper>
          <h1 slot="title">{{title}}</h1>
          <h2 slot="text">这是动态组件一的测试文本内容</h2>
      </FormHelper>

    <form action="">
        <p>
            <label for="myName">姓名</label>
            <input type="text" id="myName">
        </p>
        <p>
            <label for="myAge">年龄</label>
            <input type="text" id="myAge">
        </p>
        <p>
            <label for="myGender">性别</label>
            <input type="text" id="myGender">
        </p>
        <p>
            <label for="myHobby">爱好</label>
            <input type="text" id="myHobby">
        </p>
    </form>
      
  </div>
</template>

<script>

import FormHelper from "./FormHelper";

export default {
    name: "form-one",
    data() {
        return {
            title: "form组件一",
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

form{
    margin: 50px;
}

#form-one{
    height: 450px;
}
</style>