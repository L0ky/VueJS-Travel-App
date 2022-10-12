import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  linkExactActiveClass: "vue-school-active-class",
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      props: true
    },
    {
      path: "/destination/:slug",
      name: "DestinationDetails",
      props: true,
      component: () =>
        import(/* webpackChunkName: "DestinationDetails" */ "../views/DestinationDetails.vue"),
      children: [
        {
          path: ":experienceSlug",
          name: "experienceDetails",
          props: true,
          component: () =>
          import(/* webpackChunkName: "ExperienceDetails" */ "../views/ExperienceDetails.vue"),
        }
      ]
    },
    {
      path: "/:catchAll(.*)",
      name: "notFound",
      component: () =>
        import(/* webpackChunkName: "NotFound" */ "../views/NotFound.vue"),
    }
  ]
})

export default router
