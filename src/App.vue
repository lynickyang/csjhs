<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'

import {useFirebaseStore} from './stores/useFirebaseStore'
import { onMounted } from 'vue';

const useFBstore = useFirebaseStore()

import { useStoreNotes } from './stores/storeNotes';
const storeNotes= useStoreNotes()

onMounted(()=>{
  useFBstore.getProducts()
})

</script>

<template>
  <Navbar />
  <RouterView />
</template>

<!-- <style>
@import 'bulma/css/bulma.min.css';
</style> -->