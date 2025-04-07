// 1. FAQ Category
export type FaqCategoryTab = 'CONSULT' | 'USAGE';

export type FaqCategoryParams = {
	tab: FaqCategoryTab;
};
export type FaqCategoryResponse = {
	data: {
		categoryID: string;
		name: string;
	}[];
};

// 2. FAQ
export type FaqSearchParams = {
	tab: FaqCategoryTab;
	faqCategoryID?: string;
	limit: number;
	offset: number;
};
export type FaqItem = {
	id: number;
	categoryName: string;
	subCategoryName: string;
	question: string;
	answer: string;
};

export type FaqResponse = {
	pageInfo: PageInfo;
	items: FaqItem[];
};

// 3. Pagination
export type PageInfo = {
	totalRecord: number;
	offset: number;
	limit: number;
	prevOffset: number;
	nextOffset: number;
};
