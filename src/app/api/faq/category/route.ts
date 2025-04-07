import type { NextRequest } from 'next/server';
import MOCK_FAQ_CATEGORY_DATA from '@/mocks/data/faq-category.json';
import type { FaqCategoryTab } from '@/types/faq';

export async function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams;
	const tab = (searchParams.get('tab') || 'CONSULT') as FaqCategoryTab;

	const data = MOCK_FAQ_CATEGORY_DATA[tab] || [];

	return Response.json({
		data,
	});
}
