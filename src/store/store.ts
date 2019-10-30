
import Vuex, { Module } from 'vuex';
import Vue from 'vue';
import UserSearchModule from './modules/UserSearchModule';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  modules: {
    UserSearchModule,
  },
});
