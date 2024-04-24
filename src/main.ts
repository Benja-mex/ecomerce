

import { createApp } from 'vue'
import router from './router'
import { createPinia } from 'pinia'
//Vuetify
import 'vuetify/styles'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue'

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'dark',
    },
    })

const app = createApp(App)

app.use(router)
app.use(vuetify)
app.use(createPinia())
app.mount('#app')
