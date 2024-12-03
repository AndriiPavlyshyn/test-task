<template>
	<div class="two-things">
		<TitleH1 class="mb-[var(--px-20)]">{{ docTitle }}</TitleH1>
	</div>
</template>

<script setup lang="ts">

import TitleH1 from '@/components/shared/Title-h1.vue';

const docTitle: string = document.title;
</script>

<style scoped>

</style>
