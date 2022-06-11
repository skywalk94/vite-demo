<template>
  <div>{{ state.value }}</div>
</template>

<script setup>
import { reactive, onMounted } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()
const state = reactive({
  value: route.params.id,
})

onMounted(() => {
  console.log("我是上个页面传递的参数：" + state.value)
})

</script>

<style  lang='less' scoped>
</style>