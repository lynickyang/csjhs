<script setup>
  import Slide from './Slideshow.vue'
  import Card from './Card.vue'
  import { useDataStore } from '@/stores/useDataStore';

const sotreDatas= useDataStore()

</script>


<!-- 在這裡加入資訊，帶入到元件裡面 -->
<template>

  <Slide />
  <div class="container-md">
    <div class="row" pt-5>
      <div class="col"  v-for="item in sotreDatas.ItemData">
        <Card 
        class="mt-3"
        :key="item.id"
        :item="item"/>
      </div>
    </div>   
  </div>
</template>
