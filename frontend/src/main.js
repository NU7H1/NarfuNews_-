import { createApp } from 'vue';
import App from './App.vue';

import '@mdi/font/css/materialdesignicons.css';
import { aliases, mdi } from 'vuetify/iconsets/mdi';

import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives,
  theme: { defaultTheme: 'light' },
});

createApp(App).use(vuetify).mount('#app');
