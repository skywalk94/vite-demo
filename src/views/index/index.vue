<template>
  <button class="btn" @click="goMain()">{{ msg }}</button>
  <button class="btn" @click="update">{{ state.msg }}</button>
  <van-button onclick="alert(111111)">点击弹窗</van-button>
  <van-button type="primary">主要按钮</van-button>
</template>
<script setup>
import { reactive, onMounted, ref } from "vue"
import { useRouter } from "vue-router"
import { useStore } from "vuex"

const router = useRouter()
const store = useStore()
let msg = ref("页面跳转")
const state = reactive({
  msg: "修改值",
})

onMounted(() => {
  console.log(store.state.num)
})

const update = () => {
  state.msg = "修改后的值"
}

const goMain = () => {
  router.push({
    path: "/main/123",
  })
}
</script>

<style src='./index.less' lang='less' scoped>
</style>