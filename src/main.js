import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import router from './router'
import axios from 'axios'
import ElementUI from'element-ui'; 
import 'element-ui/lib/theme-chalk/index.css';
import animate from "animate.css";

Vue.use(ElementUI);
Vue.use(animate);
// 引入vuetify样式
import 'vuetify/dist/vuetify.min.css'
// vuetify 自定义配置
export default new Vuetify({})

Vue.config.productionTip = false;

axios.defaults.baseURL = "http://localhost:3002";
Vue.prototype.$axios = axios;

Vue.use(VueRouter);
Vue.use(Vuetify);

new Vue({
  router,
  vuetify: new Vuetify(),
  render: h => h(App),
}).$mount('#app')
