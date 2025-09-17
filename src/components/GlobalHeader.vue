<template>
  <div id="globalHeader">
    <!-- a-row&a-col: Grid栅格; wrap=false 禁止换行-->
    <a-row :wrap="false">
      <a-col flex="200px">
        <router-link to="/">
          <div class="title-bar">
            <img class="logo" src="../assets/img/logo.png" alt="logo" />
            <div class="title">Wolf 云图库</div>
          </div>
        </router-link>
      </a-col>
      <a-col flex="auto">
        <!-- 导航菜单组件： current→被高亮的菜单项； @click 点击事件 -->
        <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" @click="doMenuClick" />
      </a-col>
      <a-col flex="120px">
        <div class="user-login-status">
          <div v-if="loginUserStore.loginUser.id">
            {{ loginUserStore.loginUser.userName ?? '无名' }}
          </div>
          <div v-else>
            <a-button type="primary" href="/user/login">登录</a-button>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script lang="ts" setup>
import { h, ref } from 'vue';
import { HomeOutlined } from '@ant-design/icons-vue';
import { MenuProps } from 'ant-design-vue';
import { useRouter } from 'vue-router'
import { useLoginUserStore } from '@/stores/useLoginUserStore.ts'

const loginUserStore = useLoginUserStore()

const items = ref<MenuProps['items']>([
  {
    key: '/',
    icon: () => h(HomeOutlined),
    label: '主页',
    title: '主页',
  },
  {
    key: '/about',
    label: '关于',
    title: '关于',
  },
  {
    key: 'others',
    label: h('a', { href: 'https://github.com/WolverineX23', target: '_blank' }, 'GitHub'),
    title: 'GitHub',
  },
]);

const router = useRouter();
// 当前要高亮的菜单项
const current = ref<string[]>([]);
// 通过监听路由变化，更新高亮菜单项-current，实现对应菜单项动态高亮，不受页面刷新影响
router.afterEach((to, from, next) => {
  current.value = [to.path]
})

// 路由跳转事件
const doMenuClick = ({ key }) => {
  router.push({
    path: key
  });
}

</script>

<style scoped>
#globalHeader .title-bar {
  display: flex;
  align-items: center;
}

.title {
  color: black;
  font-size: 16px;
  margin-left: 15px;
}

.logo {
  height: 48px;
}

</style>

