<template>
  <van-button type="success" @click="goMain()">{{ msg }}</van-button>
  <van-button @click="showPop()">点击弹窗</van-button>
  <van-popup
    v-model:show="state.isPop"
    position="bottom"
    :style="{ height: '30%' }"
    @close="addPopState()"
  />
</template>
<script setup>
import { reactive, onMounted, ref, onBeforeUnmount } from "vue"
import { useRouter } from "vue-router"
import { useStore } from "vuex"

const router = useRouter()
const store = useStore()

let msg = ref("页面跳转")
const state = reactive({
  isPop: false
})

onMounted(() => {
  console.log(store.state.num)
  window.addEventListener("popstate", addPopState, false);
})
onBeforeUnmount(() => {
  window.removeEventListener("popstate", addPopState, false)
})

const showPop = () => {
  state.isPop = true
  window.history.pushState(null, null, "#");
}

const addPopState = () => {
  if (state.isPop) {
    state.isPop = false
  } else {
    router.go(-1);
  }
}

const goMain = () => {
  router.push({
    path: "/main/123",
  })
}
</script>

<style src='./index.less' lang='less' scoped>
</style>