<script setup>
import Slide from "./Slideshow.vue";
import { useFirebaseStore } from "@/stores/useFirebaseStore";
import { ref } from "vue";
const useFBstore = useFirebaseStore();

const renderData = ref(useFBstore.products);
</script>

<!-- 在這裡加入資訊，帶入到元件裡面 -->
<template>
  <Slide />
  <div class="container-md">
    <div class="row" pt-5>
      <h1>card</h1>
      <div class="col-md-4" v-for="item in useFBstore.products" :key="item.id">
        <div class="card">
          <img :src="item.image" class="card-img-top img-cover" />
          <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text text-area">{{ item.description }}</p>
            <RouterLink
              class="btn btn-primary"
              :to="{ name: 'item', params: { id: item.id } }"
            >
              進入留言
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
