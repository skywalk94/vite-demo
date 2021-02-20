<template>
    <button @click="goMain()">{{msg}}</button>
</template>
<script>
    import {
        reactive,
        toRefs,
        onMounted,
    } from 'vue';
    import {
        useRouter
    } from "vue-router";
    export default {
        setup() {
            const router = useRouter()
            const that = reactive({
                msg: "页面跳转"
            })
            onMounted(() => {})
            const methods = {
                goMain() {
                    router.push({
                        path: "/main",
                        query: {
                            id: 123
                        }
                    })
                }
            }
            return {
                ...toRefs(that),
                ...methods,
            }
        },
    }
</script>
<style src='./index.less' lang='less' scoped>
</style>