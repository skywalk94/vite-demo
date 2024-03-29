import { defineStore } from 'pinia'
export const useStore = defineStore('store', {
    state: () => ({
        count: 0
    }),

    actions: {
        addCount() {
            this.count++
        }
    },
})