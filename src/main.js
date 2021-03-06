import { createApp } from 'vue'
// Bootstrap
import 'bootstrap'

// axios / VueAxios
import axios from 'axios'
import VueAxios from 'vue-axios'

// vee-validate
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
import AllRules from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

// vue-loading-overlay
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

// 本地端
import App from './App.vue'
import router from './router'

// vee-validate 設定
configure({
  generateMessage: localize({ zh_TW: zhTW })
})
setLocale('zh_TW') // 預設語系
Object.keys(AllRules).forEach(rule => {
  defineRule(rule, AllRules[rule])
})

const app = createApp(App)
app.use(VueAxios, axios)
app.use(router)
app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)
app.component('Loading', Loading)
app.mount('#app')
