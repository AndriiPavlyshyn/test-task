export type PackageType = 'prints' | 'panoramas' | 'strips';

export interface NavigationItem {
	url: string;
	title: string;
}

export interface Order {
	id: number;
	customerName: string;
	packageType: PackageType;
	time: Date;
}

export interface Package {
	price: string;
	details: string;
	title: PackageType;
}
