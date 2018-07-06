// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router/index'
// 引入样式
import 'vue-easytable/libs/themes-base/index.css'
// 导入 table
import {VTable} from 'vue-easytable'
import store from './store.js'

// 注册到全局
Vue.component(VTable.name, VTable)
Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  render: h => h(App)
});

