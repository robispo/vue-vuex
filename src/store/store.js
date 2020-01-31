import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    doubleCounter: s => s.counter * 2,
    stringCounter: s => `${s.counter} clicks!`
  }
});
