<template>
	<div class="radio-button">
		<input
			hidden
			@change="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
			:value="value"
			type="radio"
			:id="id"
			:name="name"
			class="
				peer
			"
			:checked="modelValue === value"
		/>
		<label
			class="
				block
				cursor-pointer
				rounded
				text-center
				peer-checked:bg-accent
				peer-checked:border-accent
				peer-checked:text-white
				duration-300
				py-[var(--px-10)]
				px-[var(--px-15)]
				bg-accent/10
			"
			:for="id">{{ label }}</label>
	</div>
</template>

<script setup lang="ts">
	defineProps<{
		id: string;
		name: string;
		value: string;
		label: string
		modelValue?: string,
	}>();
	const emit = defineEmits(['update:modelValue']);
</script>

<style scoped>

</style>
