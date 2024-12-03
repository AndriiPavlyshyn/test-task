<template>
	<div class="lucky-container">
		<TitleH1 class="mb-[var(--px-20)]">{{ docTitle }}</TitleH1>

		<ResultContainer class="my-[var(--px-15)] grid gap-[var(--px-10)]" title="Add order">
			<InputGroup labelFor="textToMirror" label="User name">
				<TextInput
					placeholder="Name"
					v-model="name"
					id="textToMirror"/>
			</InputGroup>

			<InputGroup labelFor="textToMirror" label="Package type">
				<div class="package-items-container grid mobile-small:grid-cols-1 tablet:grid-cols-2 tablet-large:grid-cols-3 gap-[var(--px-15)]">
					<RadioButton
						:key="packageEl.title"
						v-for="packageEl in packages"
						:id="packageEl.title"
						:value="packageEl.title"
						v-model="packageType"
						:label="`${packageEl.title}, ${packageEl.details}, ${packageEl.price}`"
						name="packageType"/>
				</div>
			</InputGroup>

			<div>
				<Button :disabled="!name || !packageType" @click="addOrder()">Add order</Button>
			</div>
		</ResultContainer>

		<ResultContainer class="my-[var(--px-15)]" title="Orders in the last hour">
			<ul v-if="orders.length" class="orders-list grid mobile-small:grid-cols-1 tablet:grid-cols-2 tablet-large:grid-cols-3 gap-[var(--px-15)]">
				<UserCard
					:order="order"
					:key="order.id"
					v-for="order in orders" />
			</ul>

			<Warning v-else>No orders yet</Warning>

			<div class="mt-[var(--px-10)]">
				<Button
					:disabled="!orders.length || !!winner"
					@click="selectWinner()">Select Winner</Button>
			</div>
		</ResultContainer>

		<Transition name="fade">
			<ResultContainer v-if="winner" class="text-white !bg-accent" title="Winner founded!">
				<h2><strong>Winner:</strong> {{ winner.customerName }}</h2>
				<p><strong>Ordered Package:</strong> {{ winner.packageType }}</p>
				<p><strong>Prize Packages:</strong> {{ prizePackages.join(', ') }}</p>
			</ResultContainer>
		</Transition>
	</div>
</template>

<script setup lang="ts">
	import InputGroup                from '@/components/controls/InputGroup.vue';
	import RadioButton               from '@/components/controls/RadioButton.vue';
	import TextInput                 from '@/components/controls/TextInput.vue';
	import UserCard                  from '@/components/lucky-feature/UserCard.vue';
	import Button                    from '@/components/shared/Button.vue';
	import ResultContainer           from '@/components/shared/ResultContainer.vue';
	import TitleH1                   from '@/components/shared/Title-h1.vue';
	import Warning                            from '@/components/shared/Warning.vue';
	import {hardOrders} from '@/temp/lucky-orders.ts';
	import type {Order, Package, PackageType} from '@/types/types.ts';
	import {computed, ref}                    from 'vue';

	const docTitle: string = document.title;
	const lastWinningHour = ref<number | null>(null);
	const winner = ref<Order | null>(null);
	const name = ref<string>('');
	const prizePackages = ref<PackageType[]>([]);
	const orders = ref<Order[]>([...hardOrders]);
	const packages: Package[] = [
		{
			details: '4x6',
			title: 'prints',
			price: '$5'
		},
		{
			details: '6x12',
			title: 'panoramas',
			price: '$7'
		},		{
			details: '2x6',
			title: 'strips',
			price: '$5'
		},
	];
	const packageType = ref<PackageType>(packages[0].title);

	const eligibleOrders = computed<Order[]>(() => {
		return orders.value.filter((order: Order): boolean => {
			const orderHour = order.time.getHours();

			return lastWinningHour.value !== orderHour;
		})
	})

	const selectWinner: Function = (): void => {
		if (eligibleOrders.value.length === 0) {
			return;
		}

		const winnerIndex: number = Math.floor(Math.random() * eligibleOrders.value.length);

		winner.value = eligibleOrders.value[winnerIndex];
		lastWinningHour.value = winner.value.time.getHours();
		prizePackages.value = getPrizePackages(winner.value.packageType);
	};

	const getPrizePackages: Function = (packageType: PackageType): PackageType[] => {
		const allPackages: PackageType[] = ['prints', 'panoramas', 'strips'];

		return allPackages.filter((p: string) => p !== packageType);
	};

	const addOrder: Function = () => {
		if(packageType.value && name.value) {
			orders.value.push({
				id: orders.value.length + 1,
				time: new Date(),
				packageType: packageType.value,
				customerName: name.value
			});

			name.value = '';
			packageType.value = 'prints';
		} else {
			console.error('Please, provide package type and customer name.')
		}
	}
</script>

<style scoped>

</style>
