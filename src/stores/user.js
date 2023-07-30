import { defineStore } from 'pinia'
// import { LocalStorage } from 'quasar'
import { ref, computed } from 'vue'
import UserRole from 'src/enums/UserRole'
// composition api 寫法

// state 就是 ref or reactive
// actions 就是一般的 function
// getter 就是 computed
export const useUserStore = defineStore('user', () => {
  // token 預設為空
  const token = ref('')
  // 信箱預設為空
  const email = ref('')
  // 購物車存的是數量，所以是 0
  const cart = ref(0)
  // 判斷管理員還是一般的使用者
  const role = ref(UserRole.USER)

  // 寫登入的 FUNCTION
  const login = (data) => {
    token.value = data.token
    email.value = data.email
    cart.value = data.cart
    role.value = data.role
  }

  const isLogin = computed(() => {
    return token.value.length > 0
  })
  const isAdmin = computed(() => {
    return role.value === UserRole.ADMIN
  })
  return {
    token,
    email,
    cart,
    role,
    login,
    isLogin,
    isAdmin
  }
}, {
  persist: {
    key: 'Sky',
    paths: ['token']
  }
})
