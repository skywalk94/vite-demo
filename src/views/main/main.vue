<template>
    <div>{{value}}</div>
</template>
<script>
    import {
        reactive,
        toRefs,
        onMounted,
    } from 'vue';
    import {
        useRoute
    } from "vue-router";
    export default {
        setup() {
            const route = useRoute()
            const that = reactive({
                value: route.query.id,
            })
            onMounted(() => {})
            const methods = {}
            return {
                ...toRefs(that),
                ...methods,
            }
        },
    }
</script>
<style src='./main.less' lang='less' scoped></style>