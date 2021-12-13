import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    token: null,
    user: null,
    podcasts: [],
  },
  mutations: {
    storeTokenInApp(state, myToken) {
      state.token = myToken;
    },
    storeUserInApp(state, theUser) {
      state.user = theUser;
    },
    storePodcasts(state, podcasts) {
      state.podcasts = podcasts;
    },
  },
  actions: {
    getPodcasts({ commit }) {
      axios.get("/podcasts").then((aResponse) => {
        console.log(aResponse);
        commit("storePodcasts", aResponse.data);
      });
    },
  },
});
