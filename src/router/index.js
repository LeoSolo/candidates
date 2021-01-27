import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import { ROUTES } from '../constants/routes'
import DemoPage from '@/pages/DemoPage/'
import CandidatePage from '@/pages/CandidatePage/'
import AuthorizationPage from '@/pages/AuthorizationPage/'
import CreateUserPage from '@/pages/CreateUserPage/'

Vue.use(Router)
Vue.use(Vuex)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: ROUTES.DEMO_PAGE,
      name: 'DemoPage',
      component: DemoPage
    },
    {
      path: ROUTES.AUTH_PAGE,
      name: 'AuthorizationPage',
      component: AuthorizationPage
    },
    {
      path: ROUTES.CREATE_USER_PAGE,
      name: 'CreateUserPage',
      component: CreateUserPage
    },
    {
      path: ROUTES.CANDIDATE_PAGE,
      name: 'CandidatePage',
      component: CandidatePage
    }
  ]
})
