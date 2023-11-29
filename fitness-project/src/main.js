import { createApp } from 'vue';
import App from './App.vue';
import {router} from '@/router/router';
import { store } from './vuex/store';
import './assets/styles/style.scss';
import "vue-awesome-paginate/dist/style.css";
import VueAwesomePaginate from 'vue-awesome-paginate';

createApp(App).use(router).use(store).use(VueAwesomePaginate).mount('#app');
