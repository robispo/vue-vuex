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
    increment: (s, p) => {
      isNaN(p) ? s.counter++ : (s.counter += p);
    },
    decrement: s => s.counter--
  },
  actions: {
    asyncIncrement: (c, { payload, time }) =>
      setTimeout(() => c.commit('increment', payload), time),
    asyncDecrement: c => setTimeout(() => c.commit('decrement'), 1000)
  }
});
