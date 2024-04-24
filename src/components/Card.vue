<script setup>
// const props = defineProps(["item"]);
import { useDataStore } from '@/stores/useDataStore';

/*
	store
*/

const sotreDatas= useDataStore()
console.log(sotreDatas.ItemData)

</script>
<template>
	<!-- <p>item:{{ item.name }}</p>
	<p>descrip:{{ item.description }}</p> -->
	<p>{{ sotreDatas.ItemData}}</p>
	<button type="button" @click="sotreDatas.SwitchOpen">button</button>
	{{ sotreDatas.openSwitch }}
	<RouterLink></RouterLink>
       
 <!-- :to="{ name: 'item', params: { id: item.id } }">{{ item.id }}  -->

</template>