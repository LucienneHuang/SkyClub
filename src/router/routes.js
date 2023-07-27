const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('pages/front/HomePage.vue'),
        meta: {
          title: 'Sky'
        }
      },
      {
        path: '/latestnews',
        name: 'lastestnews',
        component: () => import('pages/front/LatestNews.vue'),
        meta: {
          title: 'Sky | 最新消息'
        }
      },
      {
        path: '/realms',
        name: 'realms',
        component: () => import('pages/front/SkyRealms.vue'),
        meta: {
          title: 'Sky | 區域'
        }
      },
      {
        path: '/trade',
        name: 'trade',
        component: () => import('pages/front/SkyTrade.vue'),
        meta: {
          title: 'Sky | 交易'
        }
      },
      {
        path: '/contact',
        name: 'contact',
        component: () => import('pages/front/ContactPage.vue'),
        meta: {
          title: 'Sky | 聯絡我們'
        }
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      {
        path: '',
        name: 'AdminHome',
        component: () => import('pages/admin/AdminHome.vue'),
        meta: {
          title: 'Sky | 管理員首頁'
        }
      },
      {
        path: 'members',
        name: 'MemberManagement',
        component: () => import('pages/admin/MemberManagement.vue'),
        meta: {
          title: 'Sky | 會員資料管理'
        }
      },
      {
        path: 'realms',
        name: 'RealmsManagement',
        component: () => import('pages/admin/RealmsManagement.vue'),
        meta: {
          title: 'Sky | 區域介紹管理'
        }
      },
      {
        path: 'products',
        name: 'ProductsManagement',
        component: () => import('pages/admin/ProductsManagement.vue'),
        meta: {
          title: 'Sky | 全部商品管理'
        }
      },
      {
        path: 'sales',
        name: 'SalesManagement',
        component: () => import('pages/admin/SalesManagement.vue'),
        meta: {
          title: 'Sky | 全部訂單管理'
        }
      },
      {
        path: 'contact',
        name: 'ContactManagement',
        component: () => import('pages/admin/ContactManagement.vue'),
        meta: {
          title: 'Sky | 聯絡內容查看'
        }
      }
    ]
  },
  {
    path: '/member',
    component: () => import('layouts/MemberLayout.vue'),
    children: [
      {
        path: '',
        name: 'MemberHome',
        component: () => import('pages/member/MemberHome.vue'),
        meta: {
          title: 'Sky | 會員首頁'
        }
      },
      {
        path: '/products',
        name: 'ProductsManagement',
        component: () => import('pages/member/ProductsManagement.vue'),
        meta: {
          title: 'Sky | 個人商品管理'
        }
      },
      {
        path: '/sales',
        name: 'SalesManagement',
        component: () => import('pages/member/SalesManagement.vue'),
        meta: {
          title: 'Sky | 出售訂單管理'
        }
      },
      {
        path: '/orders',
        name: 'OrdersManagement',
        component: () => import('pages/member/OrdersManagement.vue'),
        meta: {
          title: 'Sky | 購買訂單查詢'
        }
      }
    ]
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('pages/front/RegisterPage.vue'),
    meta: {
      title: 'Sky | 註冊'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('pages/front/LoginPage.vue'),
    meta: {
      title: 'Sky | 登入'
    }
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
    meta: {
      title: 'Sky | Error Not Found'
    }
  }
]

export default routes
