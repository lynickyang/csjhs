<script setup>
import { useDataStore } from "@/stores/useDataStore";
const sotreDatas= useDataStore();

defineProps(["item"]);


</script>



<template>

  <div class="card ">
    <img :src="item.image" class="card-img-top img-cover" />
    <div class="card-body">
      <h5 class="card-title">{{ item.name }}</h5>
      <p class="card-text text-area">{{ item.description }}</p>
      <button type="button" href="#" class="btn btn-danger " @click="sotreDatas.removieData(item.id)">刪除</button>
      <button type="button" href="#" class="btn btn-primary">編輯</button>
    </div>
  </div>

  <!-- :to="{ name: 'item', params: { id: item.id } }">{{ item.id }}  -->
</template>
