export default [
  {
    path: '/',
    name: 'test',
    component: () => import(/* webpackChunkName:'visit' */ '@/views/test.vue'),
  },
  {
    path: '*',
    name: '404',
    component: () => import('@/views/404.vue'),
  },
]
