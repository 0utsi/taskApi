export interface ProductsResponseData {
	page: number;
	per_page: number;
	total: number;
	total_pages: number;
	data: Datum[];
	support: Support;
}

export interface Datum {
	data: any;
	id: number;
	name: string;
	year: number;
	color: string;
	pantone_value: string;
}

export interface Support {
	url: string;
	text: string;
}
