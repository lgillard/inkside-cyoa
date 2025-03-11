import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {createVuetify} from 'vuetify'

import App from '../ui/App.vue'
import router from './router'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const pinia = createPinia();
const app = createApp(App)

const myCustomLightTheme = {
  dark: false,
  colors: {
    background: '#FEFEF5',
    surface: '#FEFEF5',
    'on-background': '#302c2b',
    'on-surface': '#302c2b',
    'on_surface': '#302c2b',
    primary: '#996014',
    primary_lighten: '#d6b177',
    secondary: '#326485',
    error: '#ff2e00',
  },
}

const myCustomDarkTheme = {
  dark: true,
  colors: {
    background: '#302c2b',
    surface: '#302c2b',
    'on-background': '#FEFEF5',
    'on-surface': '#FEFEF5',
    'on_surface': '#FEFEF5',
    primary: '#d6b177',
    primary_lighten: '#ad6b17',
    secondary: '#75aace',
    error: '#ff2e00',
  },
}

const myCustomDeuteranopiaLightTheme = {
  dark: false,
  colors: {
    background: '#FEFEF5',
    surface: '#FEFEF5',
    'on-background': '#302c2b',
    'on-surface': '#302c2b',
    'on_surface': '#302c2b',
    primary: '#9e6215',
    primary_lighten: '#d6b177',
    secondary: '#7e6d6d',
    error: '#44449c',
  },
}

const myCustomDeuteranopiaDarkTheme = {
  dark: true,
  colors: {
    background: '#302c2b',
    surface: '#302c2b',
    'on-background': '#FEFEF5',
    'on-surface': '#FEFEF5',
    'on_surface': '#FEFEF5',
    primary: '#d6b177',
    primary_lighten: '#9e6215',
    secondary: '#aa9d9d',
    error: '#75aace',
  },
}


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
