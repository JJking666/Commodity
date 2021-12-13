import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store/store'
import TreeTable from 'vue-table-with-tree-grid'
//echarts
import "echarts";
import ECharts from 'vue-echarts';
//vue-quill-editor
import VueQuillEditor from 'vue-quill-editor'
//import '@/styles/index.scss'
import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme

Vue.use(VueQuillEditor, /* { default global options } */)
//需要挂载到Vue原型上
Vue.component("tree-table",TreeTable);
Vue.component("v-chart", ECharts);
//使用UI组件库
Vue.use(ElementUI);
//开发者工具Vue
Vue.config.devtools = true;
Vue.use(VueResource)
Vue.use(VueRouter)

//关闭生产提示
Vue.config.productionTip= false;
//Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
new Vue({
  store,
  render: h => h(App),
  router:router
}).$mount('#app')
