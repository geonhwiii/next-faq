import { faqCategoryMockData } from '@/mocks/data/faq-cateogry';
import type { NextRequest } from 'next/server';

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

export function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams;
	const tab = searchParams.get('tab');

	return Response.json({
		data: tab === 'CONSULT' ? faqCategoryMockData.CONSULT : faqCategoryMockData.USAGE,
	});
}
