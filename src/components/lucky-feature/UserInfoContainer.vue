<template>
	<div class="user-info">
		<h4 class="title text-white text-px12">{{ title }}</h4>
		<p class="value text-white text-px14">{{ value }}</p>
	</div>
</template>

<script setup lang="ts">
	defineProps<{
		title: string;
		value: string;
	}>();
</script>

<style scoped>

</style>
