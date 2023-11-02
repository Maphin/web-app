import { createApp } from 'vue';
import App from './App.vue';
import {router} from '@/router/router';
import { store } from './vuex/store';
import './assets/styles/style.scss';

createApp(App).use(router).use(store).mount('#app');
