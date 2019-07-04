// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 切换中英文
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
import i18n from './locales'

// 按需引入elemntUI部分组件
import { Pagination, Carousel,CarouselItem,Option,Select} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Pagination);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Option);
Vue.use(Select);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  components: { App },
  template: '<App/>'
})
