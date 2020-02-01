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
  },
  mutations: {
    increment: s => s.counter++,
    decrement: s => s.counter--
  },
  actions: {
    asyncIncrement: c => setTimeout(() => c.commit('increment'), 1000),
    asyncDecrement: c => setTimeout(() => c.commit('decrement'), 1000)
  }
});
