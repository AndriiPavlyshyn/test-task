<template>
	<div class="mirror-task">
		<TitleH1 class="mb-[var(--px-20)]">{{ docTitle }}</TitleH1>

		<InputGroup labelFor="textToMirror" label="Text to mirror">
			<TextInput
				placeholder="Input your text please"
				v-model="input"
				id="textToMirror"/>
		</InputGroup>

		<ResultContainer class="my-[var(--px-15)]" title="Text before mirror">
			<Transition name="fade">
				<div v-if="input" class="result">
					{{ input }}
				</div>
			</Transition>

			<Transition name="fade">
				<Warning v-if="!input">No text to mirror, please input something</Warning>
			</Transition>
		</ResultContainer>

		<ResultContainer title="Text after mirror">
			<div v-if="input" class="result">
				{{ mirroredText }}
			</div>

			<Warning v-else>No text to mirror, please input something</Warning>
		</ResultContainer>
	</div>
</template>

<script setup lang="ts">
	import InputGroup      from '@/components/controls/InputGroup.vue';
	import TextInput       from '@/components/controls/TextInput.vue';
	import ResultContainer from '@/components/shared/ResultContainer.vue';
	import TitleH1         from '@/components/shared/Title-h1.vue';
	import Warning         from '@/components/shared/Warning.vue';
	import {computed, ref} from 'vue';

	const docTitle: string = document.title
	const input = ref<string>('Hello world!');
	const mirroredText = computed<string>(() => {
		return input.value.split('').reverse().join('');
	});
</script>

<style scoped>

</style>
