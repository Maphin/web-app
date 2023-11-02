//import Vue from 'vue';
import actions from './actions/actions';
import mutations from './mutations/mutations';
import getters from './getters/getters';
import { createStore } from 'vuex';

export const store = createStore({
    state: {

    },
    mutations,
    actions,
    getters,
    modules: {}
})