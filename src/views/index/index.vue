<template>
  <button class="btn" @click="goMain()">{{ msg }}</button>
  <van-button type="primary">主要按钮</van-button>
</template>
<script>
import { reactive, toRefs, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  setup() {
    const router = useRouter();
    const store = useStore();
    const state = reactive({
      msg: "页面跳转",
    });

    onMounted(() => {
      console.log(store.state.num);
    });

    const goMain = () => {
      router.push({
        path: "/main/123",
      });
    };

    return {
      ...toRefs(state),
      goMain,
    };
  },
};
</script>
<style src='./index.less' lang='less' scoped>
</style>