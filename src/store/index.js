import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    jsonInput: {}
  },
  mutations: {
    SET_JSON: (state, payload) => {
      state.jsonInput = payload;
    }
  },
  actions: {
    SAVE_JSON: (context, jsonData) => {
      context.commit("SET_JSON", jsonData);
    }
  },
  modules: {}
});
