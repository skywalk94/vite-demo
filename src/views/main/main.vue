<template>
  <div>{{ state.value }}</div>
</template>

<script setup>
import { reactive } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const state = reactive({
  value: route.params.id,
});

</script>

<style src='./main.less' lang='less' scoped>
</style>