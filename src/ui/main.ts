import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {createVuetify} from 'vuetify'

import App from './App.vue'
import router from './router.ts'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import {
  myCustomDarkTheme, myCustomDeuteranopiaDarkTheme,
  myCustomDeuteranopiaLightTheme,
  myCustomLightTheme
} from "@/ui/themes.ts";

const pinia = createPinia();
const app = createApp(App)

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'myCustomDarkTheme',
    themes: {
      myCustomLightTheme,
      myCustomDarkTheme,
      myCustomDeuteranopiaLightTheme,
      myCustomDeuteranopiaDarkTheme,
    },
  },
  components,
  directives,
})

app.use(vuetify)
app.use(pinia)
app.use(router)

app.mount('#app')
