import Vue from 'vue'
import UView from 'uview-ui'
import App from '@/App'
import store from '@/store'
Vue.prototype.towxml = require('./static/towxml/index.js')

Vue.use(UView)
Vue.config.productionTip = false

const app = new Vue({
	store,
	...App
})
app.$mount()
