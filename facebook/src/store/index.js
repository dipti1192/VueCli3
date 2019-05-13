import Vue from 'vue';
import Vuex from 'vuex';
import { Feeds } from './modules/feeds';
import { Users } from './modules/users';
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    Feeds,
    Users,
  }
});
export default store;