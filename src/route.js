import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./components/HomePage.vue";
import Login from "./components/Login.vue";
import NotFound from "./components/NotFound.vue";
import PodcastDetail from "./components/PodcastDetail.vue";
import Podcasts from "./components/Podcasts.vue";
import Signup from "./components/Signup.vue";
import SubscriptionCreate from "./components/SubscriptionCreate.vue";
import Listener from "./components/Listener.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/Listener", component: Listener },
    { path: "/Login", component: Login },
    { path: "/Podcasts", component: Podcasts },
    {
      path: "/Podcasts/:pk",
      component: PodcastDetail,
      children: [{ path: "subscription", component: SubscriptionCreate }],
    },
    { path: "/Signup", component: Signup },
    { path: "/:invalidroute(.*)", component: NotFound },
  ],
});

export default router;
