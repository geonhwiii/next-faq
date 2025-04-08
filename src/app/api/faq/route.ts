import type { NextRequest } from 'next/server';
import type { FaqResponse, FaqItem, FaqCategoryTab } from '@/types/faq';
import MOCK_FAQ_DATA from '@/mocks/data/faq.json';
import MOCK_CATEGORY_DATA from '@/mocks/data/category.json';

export async function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams;

	const limit = Number(searchParams.get('limit')) || 10;
	const offset = Number(searchParams.get('offset')) || 0;
	const faqCategoryID = searchParams.get('faqCategoryID');
	const question = searchParams.get('question') || '';
	const tab = (searchParams.get('tab') || 'CONSULT') as FaqCategoryTab;

	let items = MOCK_FAQ_DATA[tab] || [];
	if (faqCategoryID) {
		const targetName = MOCK_CATEGORY_DATA.data.find((category) => category.categoryID === faqCategoryID)?.name;
		if (targetName?.length) {
			items = items.filter((item) =>
				tab === 'CONSULT' ? item.subCategoryName === targetName : item.categoryName === targetName,
			);
		}
	}

	if (question) {
		items = items.filter((item) => item.question.includes(question));
	}

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
