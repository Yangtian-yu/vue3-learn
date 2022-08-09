import { createRouter, createWebHashHistory, RouteRecord } from "vue-router"

export type AppRouterRecordRaw = RouteRecord & {
  hidden?: boolean,
  component?: any,
  meta?: any
}

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      meta: {
        title: "name"
      },
      component: () => import('../views/Home.vue')
    },
    {
      path: "/add",
      component: () => import('../views/AddTodo.vue'),
      hidden: false,

    },
    {
      path: "/pinia",
      component: () => import('../views/PiniaTest.vue'),
      hidden: false,

    }
  ] as AppRouterRecordRaw[]
})

router.beforeEach((to, from, next) => {
  console.log(to);
  next()
})

export default router
