import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    aniList: [],
    aniDetail: [],
    isPlaying: false,
  },
  getters: {},
  mutations: {
    storeAniList(state, result) {
      state.aniList.push(result);
    },
    storeAniDetail(state, result) {
      state.aniDetail.push(result);
    },
    deleteAniDetail(state) {
      state.aniDetail = [];
    },
    deleteAniList(state) {
      state.aniList = [];
    },
    storeIsPlaying(state, result) {
      state.isPlaying = result;
    },
    storeIsPausing(state, result) {
      state.isPlaying = result;
    },
  },
  actions: {
    async triggerStoreAniList({ commit }) {
      await axios
        .get("/top/anime", {
          baseURL: "https://api.allorigins.win/raw?url=http://api.jikan.moe/v4",
        })
        .then((res) => {
          commit("storeAniList", res.data.data);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    async triggerStoreAniDetail({ commit }, id) {
      await axios
        .get(`${id}`, {
          baseURL: "https://api.allorigins.win/raw?url=http://api.jikan.moe/v4",
        })
        .then((res) => {
          commit("storeAniDetail", res.data.data);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    triggerDeleteAniDetail({ commit }) {
      commit("deleteAniDetail");
    },
    triggerDeleteAniList({ commit }) {
      commit("deleteAniList");
    },
    triggerPlayingAudio({ commit }, result) {
      commit("storeIsPlaying", result);
    },
    triggerPausingAudio({ commit }, result) {
      commit("storeIsPausing", result);
    },
  },
  modules: {},
});
