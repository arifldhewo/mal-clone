import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import LandingView from "../views/LandingView.vue";
import DetailView from "@/views/DetailView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/anilist",
    name: "home",
    component: HomeView,
  },
  {
    path: "/anime/:id",
    name: "detail",
    component: DetailView,
  },
  {
    path: "/",
    name: "landing",
    component: LandingView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
