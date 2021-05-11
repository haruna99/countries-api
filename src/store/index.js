import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    countryDetail: "",
    dark: false,
  },
  mutations: {
    SET_MODE(state, payload) {
      state.dark = payload
    }
  },
  actions: {},
  modules: {},
  getters: {
    countryDetail(state) {
      return state.countryDetail
    },
    dark(state) {
      return state.dark
    },
  }
});
