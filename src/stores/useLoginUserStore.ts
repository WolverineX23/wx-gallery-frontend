import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

/**
 * 存储登陆用户信息的 store(状态)
 */
export const useLoginUserStore = defineStore('loginUser', () => {
  const loginUser = ref({
    userName: "未登录",
    id: -1
  })

  /**
   * 设置登录用户
   *
   * @param newLoginUser
   */
  function setLoginUser(newLoginUser: any) {
    loginUser.value = newLoginUser;
  }

  async function fetchLoginUser() {
    // todo 由于后端还没提供接口，暂时注释
    // const res = await getCurrentUser();
    // if (res.data.code === 0 && res.data.data) {
    //   loginUser.value = res.data.data;
    // }
    setTimeout(() => {
      loginUser.value = {userName: "测试用户", id: 1}
    }, 3000)
  }

  // 返回
  return { loginUser, setLoginUser, fetchLoginUser }
})
