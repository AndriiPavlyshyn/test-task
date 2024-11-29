<template>
	<nav class="navigation">
		<ul class="navigation__list grid gap-[var(--px-15)]">
			<li v-for="item in navItems" class="navigation__item flex">
				<RouterLink
					class="
						navigation__link
						py-[var(--px-10)]
						px-[var(--px-20)]
						duration-200
						ease-out
						bg-grey/50
						rounded-lg
						[&.router-link-active]:bg-accent
						[&.router-link-active]:text-white
						hover:shadow
						hover:bg-grey/80
					"
					:to="item.url">{{ item.title }}</RouterLink>
			</li>
		</ul>
	</nav>
</template>

<script setup lang="ts">
	import type {NavigationItem} from '@/types/types.ts';


	const navItems: NavigationItem[] = [
		{
			url: 'mirror',
			title: 'Challenge 1: Mirror, Mirror on the Screen!'
		},
		{
			url: 'lucky',
			title: 'Challenge 2: I’m feeling lucky!'
		},
		{
			url: 'two-things',
			title: 'Challenge 3: Only two things in life are guaranteed…'
		},
	]
</script>

<style scoped>

</style>
