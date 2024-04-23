import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useDataStore = defineStore('alldata', () => {
  const count = ref(0)//state

  //getters
  const doubleCount = computed(() => count.value * 2)

  //actions
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
