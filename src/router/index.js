import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import { ROUTES } from '../constants/routes'
import PreviewPage from '@/pages/PreviewPage/'
import CandidatePage from '@/pages/CandidatePage/'

Vue.use(Router)
Vue.use(Vuex)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: ROUTES.PREVIEW_PAGE,
      name: 'PreviewPage',
      component: PreviewPage
    },
    {
      path: ROUTES.CANDIDATE_PAGE,
      name: 'CandidatePage',
      component: CandidatePage
    }
  ]
})
