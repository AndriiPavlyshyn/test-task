import {usePageTitle}                                from '@/composables/usePageTitle.ts';
import {createRouter, createWebHistory, type Router} from 'vue-router';

const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/mirror',
    },
    {
      path: '/mirror',
      name: 'mirror',
      component: () => import('../views/Mirror.vue'),
    },
    {
      path: '/lucky',
      name: 'lucky',
      component: () => import('../views/Lucky.vue'),
    },
    {
      path: '/two-things',
      name: 'two-things',
      component: () => import('../views/TwoThings.vue'),
    },
  ],
})

router.beforeEach((to, from) => {
  document.title = usePageTitle(to.name) || 'Test task';
})

export default router
