import { createApp, h } from 'vue'
import App from './App.vue'
import router from './src/router'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import MegaphoneIcon from './src/components/Icons/MegaphoneIcon.vue'
import HomeIcon from './src/components/Icons/HomeIcon.vue'
import FireIcon from './src/components/Icons/FireIcon.vue'
import SettingsIcon from './src/components/Icons/SettingsIcon.vue'
import ExitIcon from './src/components/Icons/ExitIcon.vue'
import MenuIcon from './src/components/Icons/MenuIcon.vue'
import SearchIcon from './src/components/Icons/SearchIcon.vue'
import ArrowDownIcon from './src/components/Icons/ArrowDownIcon.vue'

const customIcons = {
  megaphone: MegaphoneIcon,
  home: HomeIcon,
  fire: FireIcon,
  settings: SettingsIcon,
  exit: ExitIcon,
  menu: MenuIcon,
  search: SearchIcon,
  arrowDown: ArrowDownIcon,
}

const vuetify = createVuetify({
  components,
  directives,
  theme: { defaultTheme: 'light' },
  icons: {
    defaultSet: 'custom',
    sets: {
      custom: {
        component: (props) => {
          const IconComponent = customIcons[props.icon]
          if (!IconComponent) return null
          return h(IconComponent, {
            width: props.size,
            height: props.size,
            style: `color: ${props.color};`,
          })
        },
      },
    },
    aliases: {
      megaphone: 'megaphone',
      home: 'home',
      fire: 'fire',
      settings: 'settings',
      exit: 'exit',
      menu: 'menu',
      search: 'search',
      arrowDown: 'arrowDown',
    },
  },
})

import { registerServices } from './src/plugins/api/services/index.js'

const app = createApp(App);
registerServices(app);
app.use(vuetify);
app.use(router);
app.mount('#app');
