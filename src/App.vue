<template>
  <div id="app">
    <BasicLayout />
  </div>
</template>

<script setup lang="ts">
import BasicLayout from '@/layouts/BasicLayout.vue'
/* 用户权限统一在 全局权限校验脚本 access.ts 中获取
import { healthUsingGet } from '@/api/mainController.ts'
import { useLoginUserStore } from '@/stores/useLoginUserStore.ts'

const loginUserStore = useLoginUserStore()
loginUserStore.fetchLoginUser()

healthUsingGet().then((response) => {
  console.log(response)
})
*/
</script>

<style scoped></style>
