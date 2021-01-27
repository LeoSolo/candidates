import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/base.scss'

Vue.config.productionTip = false

Vue.directive('click-outside', {
  bind: function (el, binding, vnode) {
    const clickOutsideEvent = function (event) {
      if (!(el === event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event)
      }
    }
    document.body.addEventListener('click', clickOutsideEvent)
  }
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
