import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'

import './style/style.css'
import 'noto-sans-tc/noto_sans_tc_regular/css.css'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import RadialProgressBar from 'vue-radial-progress'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCheck, faPen, faTimes, faUndo, faSave, faPlay, faPause, faStepForward, faHome, faList, faClock } from '@fortawesome/free-solid-svg-icons'

import draggable from 'vuedraggable'

Vue.config.productionTip = false

library.add(faCheck, faPen, faTimes, faUndo, faSave, faPlay, faPause, faStepForward, faHome, faList, faClock)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('RadialProgressBar', RadialProgressBar)
Vue.component('draggable', draggable)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
