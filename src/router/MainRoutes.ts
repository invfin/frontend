const MainRoutes = {
  path: '/main',
  meta: {
    requiresAuth: true
  },
  redirect: '/main/dashboard/default',
  component: () => import('@/layouts/full/FullLayout.vue'),
  children: [
    {
      name: 'LandingPage',
      path: '/',
      component: () => import('@/views/dashboards/default/DefaultDashboard.vue')
    },
    {
      name: 'Default',
      path: '/dashboard/default',
      component: () => import('@/views/dashboards/default/DefaultDashboard.vue')
    },
    {
      name: 'Investments',
      path: '/investments',
      component: () => import('@/views/investments/ListView.vue')
    },
    {
      name: 'Budget',
      path: '/budget',
      component: () => import('@/views/budget/DetailView.vue')
    },
    {
      name: 'Empresas',
      path: '/companies',
      component: () => import('@/views/companies/ListView.vue')
    },
    {
      name: 'Empresa',
      path: '/companies/:ticker',
      component: () => import('@/views/companies/DetailView.vue')
    },
    {
      name: 'Noticias',
      path: '/news',
      component: () => import('@/views/news/ListView.vue')
    },
    {
      name: 'Noticia',
      path: '/news/:slug',
      component: () => import('@/views/news/DetailView.vue')
    },
    {
      name: 'Ayuda',
      path: '/help',
      component: () => import('@/views/dashboards/default/DefaultDashboard.vue')
    }
  ]
};

export default MainRoutes;
