import { boot } from 'quasar/wrappers'
import axios from 'axios'
import { useUserStore } from 'src/stores/user.js'

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({ baseURL: import.meta.env.VITE_API })
// 用這個傳 jwt 的請求
const apiAuth = axios.create({ baseURL: import.meta.env.VITE_API })
// interceptors 攔截器
// request 為出去的攔截器
// response 為回來的攔截器
// config 指的是送出去請求的設定

// interceptors.request
// 1. 呼叫 axios.get 或 axios.post ....delete....patch 時
// 2. 之後會進到 interceptors.request 把請求攔截下來
// 3. 處理完之後才會送出請求
// 4. 送出請求回來的時候

// 掰惹威如果不這樣
apiAuth.interceptors.request.use(config => {
  const user = useUserStore()
  // 送出時會自動把 jwt 加在 header 上面
  // 就不用每次去設定 headers

  // 這段的意思是在送出請求之前，我在設定的 headers 的驗證 加上我們的 token
  // token 要從 store 裡面取
  config.headers.authorization = 'Bearer ' + user.token
  return config
})

// interceptors.response 回應攔截器
// 1. 呼叫 axios 的 .then 跟 .catch
// 這個處理完後才會進入到 .then .catch

// 1. getProfile
// 2. 如果發生逾時錯誤
// 3. 傳送舊換新請求
// 4. 如果舊換新成功，修改 getProfile 請求的 jwt 後重新送出
// 5. 如果舊換新失敗，將 getProfile 的錯誤回傳
// 6. 如果不是登入逾時錯誤，將 getProfile 的錯誤回傳
// apiAuth.interceptors.response.use(成功執行的 function, 失敗執行的 function)
apiAuth.interceptors.response.use(res => {
  return res
}, error => {
// 如果有收到回應
  if (error.response) {
    // 如果是 JWT 過期的錯誤，且不是舊換新請求
    // 如果今天沒有後面那端，會一直迴圈下去
    if (error.response.data.message === '登入逾時' && error.config !== '/users/extend') {
      const user = useUserStore()
      // 傳送 JWT 舊換新請求
      return apiAuth.patch('/users/extend')
        .then(({ data }) => {
          // 如果舊換新成功，更新 user store 的 JWT
          user.token = data.result
          // 修改原本發生錯誤的請求的 JWT
          error.config.headers.authorization = 'Bearer ' + user.token
          // 重新傳送原請求
          return axios(error.config)
        })
        .catch(() => {
          // 如果舊換新失敗，登出
          user.logout()
          // 回應原錯誤到呼叫 axios 的地方
          // 這邊要用 Promise.reject 回傳錯誤，因為 axios 他的錯誤必須要 return 一個 promise 的錯誤
          return Promise.reject(error)
        })
    }
  }
  // 如果失敗的請求沒回應，回傳原錯誤到呼叫 axios 的地方
  return Promise.reject(error)
})

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})

export { api, apiAuth }
