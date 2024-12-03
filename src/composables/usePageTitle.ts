import {navItems}            from '@/navigation.ts';
import type {NavigationItem} from '@/types/types.ts';


export const usePageTitle: Function = (name: string): any => {
	return navItems.find((item: NavigationItem) => item.url === name).title;
};
