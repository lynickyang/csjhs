<script setup>
const props = defineProps(["item"]);

</script>
<template>
	<p>item:{{ item.name }}</p>
	<p>descrip:{{ item.description }}</p>
	<RouterLink
        :to="{ name: 'item', params: { id: item.id } }">{{ item.id }} 
    </RouterLink>

</template>