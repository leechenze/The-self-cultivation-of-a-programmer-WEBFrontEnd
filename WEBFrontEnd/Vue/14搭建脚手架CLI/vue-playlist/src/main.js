// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from "vue-resource";
import App from './App'
import router from './router/index'
import Users from '@/components/Users'

Vue.config.productionTip = false





// 全局下注册组件
Vue.component("Users", Users);


// 声明应用VueResource
Vue.use(VueResource);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app')
// el: '#app' 可以不指定但是, 必须要在后面调用$mount方法来指定#app;