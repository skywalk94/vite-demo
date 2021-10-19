<template>
    <h1 @click="childClick">{{ title }}</h1>
    <button @click="updateFunc">修改父组件传递的值</button>
</template>

<script setup>
import { defineProps, defineEmits, defineExpose } from "vue"
defineProps({
    //定义子组件需要接收的值
    title: {
        type: String,
        default: ""
    }
})

//向父组件传递子组件的值和方法
defineExpose({
    childValue: "子组件的值",
    childFunc() {
        console.log("子组件的方法")
    }
})

// 注册事件
const emit = defineEmits(["myClick", "update:title"])

// 传给父组件的值
const childClick = () => {
    emit("myClick", "子组件通过事件传给父组件的参数")
}

//修改父组件传的值
const updateFunc = () => {
    emit("update:title", "子组件修改的新标题")
}

</script>
<style lang='less' scoped>
</style>