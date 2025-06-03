const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/PaginaInicial.vue') }
    ]
  },
  {
    path: '/linhas',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/PaginaLinhas.vue') }
    ]
  },
  {
    path: '/mapa',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/PaginaMapa.vue') }
    ]
  },
  

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErroNaoEncontrado.vue')
  }
]

export default routes
