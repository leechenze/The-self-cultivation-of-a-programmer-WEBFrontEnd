<template>
  <div id="directive-test">
      
      <h1>自定义指令</h1>
        <input type="text" v-model="msg">
        <div class="listBox" v-list="msg"></div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
    name: "Directive-test",
    data() {
        return {
            msg: '',
        }
    },    
};
Vue.directive('list', {
    bind() {
        // console.log('只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置');
    },
    inserted(el, binding, vnode, oldnode) {
        // console.log('被绑定元素插入父节点时调用');
        console.log(el);
        console.log(binding);
        console.log(vnode);
        console.log(oldnode);

        var ulStr = document.createElement('ul'),liStr;
        for(let i = 0; i <= 5; i++) {
            liStr = `<li>${binding.rawName} === ${binding.value}</li>`;
        }

        var parser = new DOMParser();
        liStr = parser.parseFromString(liStr, 'text/html').childNodes[0].childNodes[1].childNodes
        ulStr.appendChild(liStr[0]);
        el.appendChild(ulStr);

    },
    update(el, binding) {
        // console.log('更新时调用');
        
        var ulStr = document.createElement('ul'),liStr;
        for(let i = 0; i <= 5; i++) {
            liStr = `<li>${binding.rawName} === ${binding.value}</li>`;
        }

        var parser = new DOMParser();
        liStr = parser.parseFromString(liStr, 'text/html').childNodes[0].childNodes[1].childNodes
        ulStr.appendChild(liStr[0]);
        el.innerHTML = '';
        el.appendChild(ulStr);



    },
    componentUpdated() {
        // console.log('更新时调用, 包括子元素或子组件');
    },
    unbind() {
        // console.log('解绑时调用');
    }
})
</script>

<style scoped>

.listBox{
    margin: 50px;
}



</style>