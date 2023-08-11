import { route } from 'quasar/wrappers'
// START_LOCATION 是進到頁面的第一次跳轉
// 假設他第一次進到你的網頁，他的網址是 /login，就代表他的 START_LOCATION 是 login
// 就是第一次路由導航的位置
// 可以判斷他是不是第一次進這個網頁
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory, START_LOCATION } from 'vue-router'
import routes from './routes'
import { useUserStore } from 'src/stores/user'

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE)
  })
  // to 去哪裡
  // from 從哪裡來

  Router.afterEach((to, from) => {
    document.title = to.meta.title
  })
  // next 如果 okay 導去下一頁
  // beforeEach 進到每一頁之前
  Router.beforeEach(async (to, from, next) => {
    // 抓使用者資料
    const user = useUserStore()
    // 剛進網頁時的第一次路由跳轉
    if (from === START_LOCATION) {
      // 取得使用者資訊
      await user.getProfile()
    }
    // 如果有登入且去註冊/登入頁面
    if (user.isLogin && ['/register', '/login'].includes(to.path)) {
      // 導向到根目錄
      next('/')
    } else if (to.meta.login && !user.isLogin) {
      // 如果要去的地方要登陸，且使用者沒登入
      // 丟到登入頁
      next('/login')
    } else if (to.meta.admin && !user.isAdmin) {
      // 如果要去的地方要管理員權限，且使用者不是管理員
      // 丟到首頁
      next('/')
    } else if (user.isAdmin && ['/member'].includes(to.path)) {
      next('/')
    } else if (!user.isLogin && ['/trade'].includes(to.path)) {
      next('/login')
    } else {
      // else 該去哪就去哪，不導向
      next()
    }
  })
  return Router
})
