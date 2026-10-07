import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './router/routes'
import { setupI18n } from './i18n'
import '@fontsource-variable/jost'
import '@fontsource-variable/noto-sans-georgian'
import './styles/main.css'

export const createApp = ViteSSG(
  App,
  {
    routes,
    scrollBehavior(to, _from, savedPosition) {
      if (savedPosition) return savedPosition
      if (to.hash) return { el: to.hash, top: 96 }
      return { top: 0 }
    },
  },
  ({ app, router }) => {
    const i18n = setupI18n()
    app.use(i18n)
    router.beforeEach((to) => {
      i18n.global.locale.value = to.meta.locale ?? 'ka'
    })
  },
)
