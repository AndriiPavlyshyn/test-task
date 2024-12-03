<template>
	<input
		:value="props.modelValue"
		:placeholder="placeholder"
		@input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
		class="py-[var(--px-10)] px-[var(--px-20)] rounded outline-0">
</template>

<script setup lang="ts">
	const props = defineProps<{
		modelValue?: string,
		placeholder?: string
	}>();
	const emit = defineEmits(['update:modelValue']);
</script>

<style scoped>

</style>
