<script setup lang="ts">
import SidebarNavigation from '@/components/SidebarNavigation.vue';
import { RouterView } from 'vue-router'
</script>

<template>
	<div
		class="
			container
			max-w-[100%]
			py-[var(--px-15)]
			gap-[var(--px-15)]
			mx-auto
			grid
			tablet-large:grid-cols-[auto_1fr]
			mobile-small:grid-cols-1
		">
		<aside class="sidebar tablet-large:h-[calc(100vh-30px)] rounded-lg">
			<SidebarNavigation/>
		</aside>

		<div class="feature bg-grey/70 p-[var(--px-15)] rounded-lg">
			<RouterView v-slot="{ Component }">
				<Transition name="fade">
					<component :is="Component" />
				</Transition>
			</RouterView>
		</div>
	</div>
</template>

<style scoped>

</style>
