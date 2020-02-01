const state = {
  counter: 0
};
const getters = {
  doubleCounter: s => s.counter * 2,
  stringCounter: s => `${s.counter} clicks!`
};
const mutations = {
  increment: (s, p) => {
    isNaN(p) ? s.counter++ : (s.counter += p);
  },
  decrement: s => s.counter--
};
const actions = {
  asyncIncrement: (c, { payload, time }) =>
    setTimeout(() => c.commit('increment', payload), time),
  asyncDecrement: c => setTimeout(() => c.commit('decrement'), 1000)
};

export default {
  state,
  getters,
  mutations,
  actions
};