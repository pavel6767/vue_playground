import { createRouter, createWebHistory } from "vue-router";

import Form from "./components/Form.vue";
import Other from "./components/Other.vue";
import Home from "./components/Home.vue";
import NotFound from "./components/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/other",
    name: "Other",
    component: Other,
    props: true
  },
  {
    path: "/form",
    name: "Form",
    component: Form,
    props: true
  },
  // redirect
  // {
  //   path: "/all-jobs",
  //   redirect: "/"
  // },
  // 404 catchall
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory("/"),
  routes
});

export default router;
