import type { NextRequest } from 'next/server';
import type { FaqResponse, FaqItem, FaqCategoryTab } from '@/types/faq';
import MOCK_FAQ_DATA from '@/mocks/data/faq.json';

export async function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams;

	const limit = Number(searchParams.get('limit')) || 10;
	const offset = Number(searchParams.get('offset')) || 0;
	const tab = (searchParams.get('tab') || 'CONSULT') as FaqCategoryTab;

	const items = MOCK_FAQ_DATA[tab] || [];
	const slicedItems = items.slice(offset, offset + limit);
	const totalRecord = items.length;

	const response: FaqResponse = {
		pageInfo: {
			totalRecord,
			offset,
			limit,
			prevOffset: offset > 0 ? Math.max(0, offset - limit) : 0,
			nextOffset: offset + limit < totalRecord ? offset + limit : offset,
		},
		items: slicedItems,
	};

	return Response.json(response);
}
