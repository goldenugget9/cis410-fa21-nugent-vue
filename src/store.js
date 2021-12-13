import { createStore } from "vuex";
import axios from "axios";
import myRoutes from "./route";
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
    clearAuthData(state) {
      state.token = null;
      state.user = null;
    },
  },
  actions: {
    getPodcasts({ commit }) {
      axios.get("/podcasts").then((aResponse) => {
        console.log(aResponse);
        commit("storePodcasts", aResponse.data);
      });
    },
    logout({ commit, state }) {
      axios
        .post("/Listeners/logout", null, {
          headers: { Authorization: `Bearer ${state.token}` },
        })
        .then(() => {
          commit("clearAuthData");
          myRoutes.replace("/");
        })
        .catch(() => {
          console.log("error in logging out");
        });
    },
  },
});
