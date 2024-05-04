<script setup>
import { ref,computed } from "vue";
import { useFirebaseStore } from "../stores/useFirebaseStore"
const useFBstore = useFirebaseStore();




const props = defineProps(['id']);

console.log("props.id:",props.id)

const itemData = ref(useFBstore.products);
console.log('useFBstore.products:',useFBstore.products)
console.log('itemData:',itemData.value)

//從網址抓id,找出資料,指定給movie
const item = computed(() => itemData.value.find((m) => m.id === props.id));

console.log("item:",item)
</script>
<template>


  <div
    class="container flex items-center max-w-6xl gap-4 p-10 m-auto dark:text-white"
  >
      <img :src="item.image" :alt="item.name"  />
<!-- 顯示資料movie -->
    <div>
      <h1 class="mb-4 text-5xl">{{ item.name }}</h1>
      <div class="mb-3 movie-item-genres-wrapper">
      </div>
      <p class="text-xl">{{ item.description }}</p>
    </div>
  </div>

</template>
