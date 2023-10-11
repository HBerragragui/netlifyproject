import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from '../vuetify'
import { createPinia } from "pinia";

import { createAuth0 } from "@auth0/auth0-vue";


const app = createApp(App)

app.use(router)
app.use(vuetify)
app.use(
    createAuth0({
      domain: "dev-w0p0na7ozmijvcl5.us.auth0.com",
      clientId: "sKQguG8GoMM5SjWfKV57myejRCeOLPtP",
      authorizationParams: {
        redirect_uri: window.location.origin,
      }
    })
  )
  app.use(createPinia());
app.mount('#app')

