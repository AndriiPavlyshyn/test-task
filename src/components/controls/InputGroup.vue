<template>
	<div class="input-group flex flex-col">
		<label :for="labelFor" class="input-group__label text-px14 mb-[var(--px-10)]">{{ label }}</label>

		<slot />
	</div>
</template>

<script setup lang="ts">
	defineProps<{
		labelFor: string;
		label: string;
	}>();
</script>

<style scoped>

</style>
