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
  config.headers.authorization = 'Bearer' + user.token
  return config
})

// interceptors.response 回應攔截器
// 1. 呼叫 axios 的 .then 跟 .catch
// 這個處理完後才會進入到 .then .catch
apiAuth.interceptors.response.use()

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
