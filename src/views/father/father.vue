<template>
    <child v-model:title="title" @myClick="getChild" ref="childRef" />
</template>
<script setup>
import { ref, onMounted } from "vue"
import child from "@/components/child.vue"
//传给子组件的值
const title = ref("传给子组件的title")

//通过事件接收子组件传递的值
const getChild = (e) => {
    console.log(e)
}

// 获取子组件的值和方法
const childRef = ref(null)
onMounted(() => {
    console.log(childRef.value.childValue)
    childRef.value.childFunc()
})
</script>

<style src="./father.less" lang='less' scoped>
</style>