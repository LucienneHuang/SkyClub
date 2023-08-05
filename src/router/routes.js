// login: true / false 需要登入 / 不需要登入
// admin: true / false 需要管理員 / 不需要管理員
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        // 首頁不需要登入和管理員權限就能看
        path: '',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */'pages/front/HomePage.vue'),
        meta: {
          title: 'Sky',
          login: false,
          admin: false
        }
      },
      {
        // 最新消息不需要登入和管理員權限就能看
        path: '/latestnews',
        name: 'lastestnews',
        component: () => import(/* webpackChunkName: "lastestnews" */'pages/front/LatestNews.vue'),
        meta: {
          title: 'Sky | 最新消息',
          login: false,
          admin: false
        }
      },
      {
        // 區域不需要登入和管理員權限就能看
        path: '/realms',
        name: 'realms',
        component: () => import(/* webpackChunkName: "realms" */'pages/front/SkyRealms.vue'),
        meta: {
          title: 'Sky | 區域',
          login: false,
          admin: false
        }
      },
      {
        // 交易需要登入才能看 不需要管理員權限
        path: '/trade',
        name: 'trade',
        component: () => import(/* webpackChunkName: "trade" */'pages/front/SkyTrade.vue'),
        meta: {
          title: 'Sky | 交易',
          login: false,
          admin: false
        }
      },
      {
        // 聯絡我們不需要登入和管理員權限就能看
        path: '/contact',
        name: 'contact',
        component: () => import(/* webpackChunkName: "contact" */'pages/front/ContactPage.vue'),
        meta: {
          title: 'Sky | 聯絡我們',
          login: false,
          admin: false
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
        component: () => import(/* webpackChunkName: "AdminHome" */'pages/admin/AdminHome.vue'),
        meta: {
          title: 'Sky | 管理員首頁',
          login: true,
          admin: true
        }
      },
      {
        path: 'members',
        name: 'MemberManagement',
        component: () => import(/* webpackChunkName: "AdminMemberManagement" */'pages/admin/MemberManagement.vue'),
        meta: {
          title: 'Sky | 會員資料管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'latestnews',
        name: 'LatestNewsManagement',
        component: () => import(/* webpackChunkName: "LatestNewsManagement" */'pages/admin/LatestNewsManagement.vue'),
        meta: {
          title: 'Sky | 最新消息管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'realms',
        name: 'RealmsManagement',
        component: () => import(/* webpackChunkName: "AdminRealmsManagement" */'pages/admin/RealmsManagement.vue'),
        meta: {
          title: 'Sky | 區域介紹管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'products',
        name: 'AdminProductsManagement',
        component: () => import(/* webpackChunkName: "AdminProductsManagement" */'pages/admin/ProductsManagement.vue'),
        meta: {
          title: 'Sky | 全部商品管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'sales',
        name: 'AdminSalesManagement',
        component: () => import(/* webpackChunkName: "AdminSalesManagement" */'pages/admin/SalesManagement.vue'),
        meta: {
          title: 'Sky | 全部訂單管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'contact',
        name: 'ContactManagement',
        component: () => import(/* webpackChunkName: "AdminContactManagement" */'pages/admin/ContactManagement.vue'),
        meta: {
          title: 'Sky | 聯絡內容查看',
          login: true,
          admin: true
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
        component: () => import(/* webpackChunkName: "MemberHome" */'pages/member/MemberHome.vue'),
        meta: {
          title: 'Sky | 會員首頁',
          login: true,
          admin: false
        }
      },
      {
        path: 'products',
        name: 'MemberProductsManagement',
        component: () => import(/* webpackChunkName: "MemberProductsManagement" */'pages/member/MemberProductsManagement.vue'),
        meta: {
          title: 'Sky | 個人商品管理',
          login: true,
          admin: false
        }
      }, {
        path: 'addproduct',
        name: 'MemberAddProduct',
        component: () => import(/* webpackChunkName: "MemberAddProduct" */'pages/member/MemberAddProduct.vue'),
        meta: {
          title: 'Sky | 新增商品',
          login: true,
          admin: false
        }
      },
      {
        path: 'sales',
        name: 'MemberSalesManagement',
        component: () => import(/* webpackChunkName: "MemberSalesManagement" */'pages/member/MemberSalesManagement.vue'),
        meta: {
          title: 'Sky | 出售訂單管理',
          login: true,
          admin: false
        }
      },
      {
        path: 'orders',
        name: 'MemberOrdersManagement',
        component: () => import(/* webpackChunkName: "MemberOrdersManagement" */'pages/member/MemberOrdersManagement.vue'),
        meta: {
          title: 'Sky | 購買訂單查詢',
          login: true,
          admin: false
        }
      }
    ]
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */'pages/front/RegisterPage.vue'),
    meta: {
      title: 'Sky | 註冊',
      login: false,
      admin: false
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */'pages/front/LoginPage.vue'),
    meta: {
      title: 'Sky | 登入',
      login: false,
      admin: false
    }
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import(/* webpackChunkName: "error" */'pages/ErrorNotFound.vue'),
    meta: {
      title: 'Sky | Error Not Found'
    }
  }
]

export default routes
