<template>
	<li class="order p-[var(--px-15)] rounded-lg bg-accent">
		<UserInfoContainer title="Customer name:" :value="order.customerName"/>

		<hr class="my-[var(--px-5)] text-white"/>

		<UserInfoContainer title="Package type:" :value="order.packageType"/>

		<hr class="my-[var(--px-5)] text-white"/>

		<UserInfoContainer title="Order time:" :value="useDate(order.time)"/>
	</li>
</template>

<script setup lang="ts">
	import UserInfoContainer from '@/components/lucky-feature/UserInfoContainer.vue';
	import {useDate}         from '@/composables/useDate.ts';
	import type {Order}      from '@/types/types.ts';

	defineProps<{
		order: Order
	}>();


</script>

<style scoped>

</style>
