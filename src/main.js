// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import mainbox from './components/mianBox'
import mainbox5 from './components/mianBox5'
import mainbox2 from './components/mianBox2'
import leftbox from './components/leftBox'
import leftbox2 from './components/leftBox2'
import headerbox from './components/headerBox'
import allBox from './components/allBox'
import zpagenav from './components/zpagenav'
import router from'./router/index'
import global_ from './components/Global'
import '../static/css/zpageNav.css'
import VueSweetalert2 from './components/vue-sweetalert2'
/*
import myTime from './components/myTime'
*/
// 使用插件
Vue.use(VueSweetalert2)
Vue.prototype.GLOBAL = global_;
axios.defaults.baseURL=global_.BASE_URL;
Vue.prototype.$axios=axios
Vue.config.productionTip = false
import $ from 'jquery'
//设置路由

/* eslint-disable no-new */
Vue.component('headerbox',headerbox);
/*Vue.component('myTime',myTime);*/
Vue.component('mainbox',mainbox);
Vue.component('mainbox2',mainbox2);
Vue.component('leftbox',leftbox);
Vue.component('leftbox2',leftbox2);
Vue.component('allbox',allBox);
Vue.component('zpagenav',zpagenav);
new Vue({
  el:'#app',
  render:c=>c(App),
  router,
  // components: {
  //   'headerbox':headerbox,
  //   'mainbox':mainbox,
  //   'leftbox':leftbox}
})
