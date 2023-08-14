import { defineStore } from 'pinia'
// import { LocalStorage } from 'quasar'
import { ref, computed } from 'vue'
import UserRole from 'src/enums/UserRole'
import BlockUser from 'src/enums/BlockUser'
import { apiAuth } from 'src/boot/axios'
// composition api 寫法

// state 就是 ref or reactive
// actions 就是一般的 function
// getter 就是 computed
export const useUserStore = defineStore('user', () => {
  // token 預設為空
  const token = ref('')
  // 信箱預設為空
  const email = ref('')
  // 暱稱預設為遊客
  const nickname = ref('遊客')
  // 預設遊客頭貼
  const avatar = ref('https://source.boringavatars.com/beam/250/unknown_user?colors=264653,2a9d8f,e9c46a,f4a261,e76f51')
  // 購物車存的是數量，所以是 0
  const cart = ref(0)
  // 判斷管理員還是一般的使用者
  const role = ref(UserRole.USER)
  const user = ref('')
  const block = ref(BlockUser.NO)

  // 寫登入的 FUNCTION
  const login = (data) => {
    user.value = data.user
    token.value = data.token
    email.value = data.email
    nickname.value = data.nickname
    avatar.value = data.avatar
    cart.value = data.cart
    role.value = data.role
    block.value = data.block
  }
  // 取得使用者資訊
  const getProfile = async () => {
    // 如果 === 0 代表他沒有存任何的 token，就不需要執行
    if (token.value.length === 0) return
    try {
      // 去後端的 /users/profile 取資料
      const { data } = await apiAuth.get('/users/profile')
      user.value = data.result._id
      email.value = data.result.email
      nickname.value = data.result.nickname
      avatar.value = data.result.avatar
      cart.value = data.result.cart
      role.value = data.result.role
      block.value = data.result.block
    } catch (error) {
      // 如果 token !== 0，但又發生錯誤，可能是他的 token 過期了
      // 把他重設就好惹
      token.value = ''
    }
  }

  const isLogin = computed(() => {
    return token.value.length > 0
  })
  const isAdmin = computed(() => {
    return role.value === UserRole.ADMIN
  })

  const isBlock = computed(() => {
    return block.value === BlockUser.YES
  })

  const logout = () => {
    user.value = ''
    token.value = ''
    email.value = ''
    nickname.value = '遊客'
    avatar.value = 'https://source.boringavatars.com/beam/250/unknown_user?colors=264653,2a9d8f,e9c46a,f4a261,e76f51'
    cart.value = 0
    role.value = UserRole.USER
    block.value = BlockUser.NO
  }
  return {
    token,
    email,
    nickname,
    avatar,
    cart,
    role,
    block,
    login,
    isLogin,
    isAdmin,
    isBlock,
    getProfile,
    logout,
    user
  }
}, {
  persist: {
    key: 'Sky',
    paths: ['token']
  }
})
