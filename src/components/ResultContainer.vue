<template>
	<div class="result-container p-[var(--px-20)] rounded-lg bg-grey">
		<h3 class="result-container__title text-px14 font-black tracking-wider">{{ title }}</h3>

		<hr class="my-[var(--px-5)] text-accent/10">

		<slot/>
	</div>
</template>

<script setup lang="ts">
	defineProps<{
		title: string;
	}>();
</script>

<style scoped>

</style>
