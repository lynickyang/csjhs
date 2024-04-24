<script setup>
  import Slide from './Slideshow.vue'
  import Card from './Card.vue'
  import {items} from '@/movies.json';
  import { ref } from 'vue';

  const Items= ref(items);
  // console.log(Items.value)
</script>


<!-- 在這裡加入資訊，帶入到元件裡面 -->
<template>
  <Slide />
  <Card 
    v-for="item in Items"
    :key="item.id"
    :item="item"
  />
</template>
