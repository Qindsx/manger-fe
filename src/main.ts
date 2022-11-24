import { createApp } from 'vue';
import App from './App.vue';
import './assets/css/index.css';
import router from './router';

import piniaStore from './store';

const app = createApp(App);
app.use(piniaStore);
app.use(router).mount('#app');
