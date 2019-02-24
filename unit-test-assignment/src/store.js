import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    text: 'test',
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    getName(){
      return "Dipti"
    }
  }
});
