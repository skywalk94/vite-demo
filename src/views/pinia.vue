<template>
    <div>{{ store.count }}</div>
    <button @click="store.addCount">action方法数值加1</button>
    <br />
    <button @click="store.count += 1">直接数值加1</button>
</template>
<script setup>
import { useStore } from '@/store'
const store = useStore()
</script>

