<template>
	<nav class="navigation relative h-full">
		<ul
			class="
				navigation__list
				grid
				tablet-large:sticky
				tablet-large:top-[var(--px-15)]
				gap-[var(--px-15)]
			">
			<li :key="item.url" v-for="item in navItems" class="navigation__item flex">
				<RouterLink
					class="
						navigation__link
						py-[var(--px-10)]
						px-[var(--px-20)]
						duration-200
						ease-out
						bg-grey/20
						rounded-lg
						[&.router-link-active]:bg-accent
						[&.router-link-active]:border-accent
						[&.router-link-active]:text-white
						[&.router-link-active]:scale-[101%]
						hover:shadow-panel
						hover:scale-[101%]
						hover:bg-grey/40
						border
						border-grey
					"
					:to="item.url">{{ item.title }}</RouterLink>
			</li>
		</ul>
	</nav>
</template>

<script setup lang="ts">

import {navItems} from '@/navigation.ts';
</script>

<style scoped>

</style>
