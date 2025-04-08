import { infiniteQueryOptions } from '@tanstack/react-query';
import { client } from '@/shared/utils/client';
import type { FaqSearchParams, FaqResponse } from '@/types/faq';

const LIMIT = 10;

export function faqListInfiniteQueryOptions({
	tab,
	faqCategoryID,
	question,
}: Pick<FaqSearchParams, 'tab' | 'faqCategoryID' | 'question'>) {
	return infiniteQueryOptions({
		queryKey: ['faq-list', { tab, faqCategoryID, question }],
		queryFn: async ({ pageParam }: { pageParam: number }) => {
			const searchParams: FaqSearchParams = {
				tab,
				faqCategoryID,
				question,
				offset: pageParam,
				limit: 10,
			};
			const response = await client.get('faq', { searchParams }).json<FaqResponse>();
			return response;
		},
		getNextPageParam: (lastPage: FaqResponse, totalPages: FaqResponse[]) =>
			lastPage.items.length === LIMIT ? totalPages.length * LIMIT : undefined,
		initialPageParam: 0,
	});
}
