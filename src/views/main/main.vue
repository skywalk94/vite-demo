<template>
  <div>{{ value }}</div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    const state = reactive({
      value: route.params.id,
    });
    onMounted(() => {});
    return {
      ...toRefs(state),
    };
  },
};
</script>

<style src='./main.less' lang='less' scoped></style>