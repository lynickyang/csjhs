<script setup>
  import Slide from './Slideshow.vue'
  import Card from './Card.vue'
  import { useFirebaseStore } from '@/stores/useFirebaseStore';

const useFBstore= useFirebaseStore()

</script>


<!-- 在這裡加入資訊，帶入到元件裡面 -->
<template>

  <Slide />
 	
  <div class="container-md">
    <div class="row" pt-5>
      <div class="col-md-4"  v-for="item in useFBstore.products">
        <Card 
        class="mt-3"
        :key="item.id"
        :item="item"/>
      </div>
    </div>   
  </div>
</template>
