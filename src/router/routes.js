export default [
  {
    path: '/',
    name: 'legal',
    component: () => import(/* webpackChunkName:'visit' */ '@/views/legal.vue'),
  },
  {
    path: '*',
    name: '404',
    component: () => import('@/views/404.vue'),
  },
]
