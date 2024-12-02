export const useDate: Function = (date: Date) => {
	const month: number = date.getUTCMonth() + 1; // months from 1-12
	const day: number = date.getUTCDate();
	const year: number = date.getUTCFullYear();
	const hours: number = date.getHours();
	const minutes: number = date.getMinutes();

	return `${day}.${month}.${year} | ${hours}:${minutes}`;
};
