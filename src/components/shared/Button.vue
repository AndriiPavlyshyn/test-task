<template xmlns="http://www.w3.org/1999/html">
	<button
		:disabled="disabled"
		class="
			py-[var(--px-10)]
			px-[var(--px-20)]
			duration-200
			cursor-pointer
			ease-out
			bg-accent/80
			rounded-lg
			hover:shadow-panel
			hover:scale-[101%]
			hover:bg-accent
			border
			border-grey
			text-white
			disabled:bg-[#ccc]
			disabled:cursor-not-allowed
			disabled:hover:bg-[#ccc]/50
		">
		<slot/>
	</button>
</template>

<script setup lang="ts">
	defineProps<{
		disabled?: boolean
	}>();
</script>

<style scoped>

</style>
