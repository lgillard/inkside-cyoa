import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {createVuetify} from 'vuetify'

import App from './App.vue'
import router from './router.ts'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import {
  myCustomDarkTheme,
  myCustomDeuteranopiaDarkTheme
} from "@/ui/themes.ts";
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

const pinia = createPinia();
const app = createApp(App)

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'myCustomDarkTheme',
    themes: {
      myCustomDarkTheme,
      myCustomDeuteranopiaDarkTheme,
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  defaults: {
    VTextField: { variant: 'outlined', color: 'primary' },
    VTextarea: { variant: 'outlined', color: 'primary' },
    VAutocomplete: { variant: 'outlined', color: 'primary' },
    VSwitch: { variant: 'outlined', color: 'primary' },
    VSelect: { variant: 'outlined', color: 'primary' },
    VCombobox: { variant: 'outlined', color: 'primary' },
    VBtnToggle: { variant: 'outlined', color: 'primary' },
    VBtn: { variant: 'outlined', color: 'primary' },
  },
  components,
  directives,
})

app.use(vuetify)
app.use(pinia)
app.use(router)

app.mount('#app')
