import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import router from './router'

import ElementUI from'element-ui'; 
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// 引入vuetify样式
// import 'vuetify/dist/vuetify.min.css'
// vuetify 自定义配置
// export default new Vuetify({})

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Vuetify);

new Vue({
  router,
  // vuetify: new Vuetify(),
  render: h => h(App),
}).$mount('#app')
