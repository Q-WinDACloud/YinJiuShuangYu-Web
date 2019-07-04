import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import home from '@/components/home'
import CompanyIntr from '@/components/CompanyIntr'
import ContactUs from '@/components/ContactUs'
import CooperationCase from '@/components/CooperationCase'
import ProductsUsing from '@/components/ProductsUsing'
import NewsDetail from '@/components/common/NewsDetail'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      redirect: '/main/home'
    },
    {
      path: '/main/home',
      name: 'main',
      component: main,
      children:[
        {
          path: '/',
          name: 'home',
          component: home
        },
        {
          path: '/main/home',
          name: 'home',
          component: home
        },
        {
          path: '/main/CompanyIntr',
          name: 'CompanyIntr',
          component: CompanyIntr
        },
        {
          path: '/main/ContactUs',
          name: 'ContactUs',
          component: ContactUs
        },
        {
          path: '/main/CooperationCase',
          name: 'CooperationCase',
          component: CooperationCase
        },
        {
          path: '/main/ProductsUsing',
          name: 'ProductsUsing',
          component: ProductsUsing
        },
        {
          path: '/main/CompanyIntr/NewsDetail',
          name: 'NewsDetail',
          component: NewsDetail
        }
      ]
    }
  ]
})
