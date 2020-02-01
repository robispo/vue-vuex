const state = {
  value: 0
};
const getters = {
  value: s => s.value
};
const mutations = {
  updateValue: (s, p) => {
    s.value = p;
  }
};
const actions = {
  updateValue: ({ commit }, p) => commit('updateValue', p)
};

export default {
  state,
  getters,
  mutations,
  actions
};
