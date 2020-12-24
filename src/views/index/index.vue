<template>
    <div class="text" @click="goMain()">123</div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        mounted() {},
        methods: {
            goMain() {
                this.$router.push({
                    path: "./main"
                })
            }
        }
    }
</script>
<style src="./index.css" scoped>
</style>