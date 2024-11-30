<template>
	<div class="mirror-task">
		<TitleH1 class="mb-[var(--px-20)]">Challenge 1: Mirror, Mirror on the Screen!</TitleH1>

		<InputGroup labelFor="textToMirror" label="Text to mirror">
			<TextInput v-model="input" id="textToMirror"/>
		</InputGroup>

		<ResultContainer class="my-[var(--px-15)]" title="Text before mirror">{{ input }}</ResultContainer>
		<ResultContainer title="Text after mirror">{{ mirroredText }}</ResultContainer>
	</div>
</template>

<script setup lang="ts">
	import TextInput       from '@/components/controls/TextInput.vue';
	import InputGroup      from '@/components/InputGroup.vue';
	import ResultContainer from '@/components/ResultContainer.vue';
	import TitleH1         from '@/components/Title-h1.vue';
	import {computed, ref} from 'vue';

	const input = ref<string>('Hello world!');
	const mirroredText = computed<string>(() => {
		return input.value.split('').reverse().join('');
	});
</script>

<style scoped>

</style>
