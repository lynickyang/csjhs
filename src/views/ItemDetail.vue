<script setup>
import { ref,computed } from "vue";
import { items } from "@/movies.json";

const props = defineProps({
  id: Number,
});

const itemData = ref(items);
//從網址抓id,找出資料,指定給movie
const item = computed(() => itemData.value.find((m) => m.id === props.id));
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
