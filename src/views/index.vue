<template>
  <van-button type="success" @click="goMain()">{{ msg }}</van-button>
  <router-link to="/father">
    <van-button type="danger">父子组件通信</van-button>
  </router-link>
  <van-button @click="showPop()">点击弹窗</van-button>
  <van-popup v-model:show="state.isPop" position="bottom" :style="{ height: '30%' }" @close="addPopState()">可通过返回进行关闭弹窗
  </van-popup>
</template>
<script setup>
import { reactive, onMounted, ref, onBeforeUnmount } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

let msg = ref("页面跳转传参")
const state = reactive({
  isPop: false
})

onMounted(() => {
  window.addEventListener("popstate", addPopState, false)
})
onBeforeUnmount(() => {
  window.removeEventListener("popstate", addPopState, false)
})

const showPop = () => {
  state.isPop = true
  window.history.pushState(null, null, "#")
}

const addPopState = () => {
  if (state.isPop) {
    state.isPop = false
  } else {
    router.go(-1)
  }
}

const goMain = () => {
  router.push({
    path: "/main/123",
  })
}
</script>

<style  lang='less' scoped>
</style>