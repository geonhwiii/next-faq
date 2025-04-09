export type CategoryID = '' | 'PRODUCT' | 'COUNSELING' | 'CONTRACT';

export const CATEGORY_ID_OPTIONS: { label: string; value: CategoryID }[] = [
	{ label: '전체', value: '' },
	{ label: '서비스 상품', value: 'PRODUCT' },
	{ label: '도입 상담', value: 'COUNSELING' },
	{ label: '계약', value: 'CONTRACT' },
];
