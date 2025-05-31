import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faBookOpen,
  faBottleWater,
  faCookieBite,
  faHome,
  faLemon,
  faMapLocationDot,
  faMugHot,
  faMugSaucer,
  faWineGlass,
  faChevronUp,
  faChevronDown, faSearch
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faHome,
  faBookOpen,
  faMapLocationDot,
  faMugSaucer,
  faMugHot,
  faLemon,
  faBottleWater,
  faWineGlass,
  faCookieBite,
  faChevronUp,
  faChevronDown,
  faSearch
)

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
