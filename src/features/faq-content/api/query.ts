import { queryOptions } from '@tanstack/react-query';
import { client } from '@/shared/utils/client';
import type { FaqCategoryParams, FaqCategoryResponse } from '@/types/faq';

export function faqCategoryQueryOptions({ tab }: FaqCategoryParams) {
	return queryOptions({
		queryKey: ['faq-category', { tab }],
		queryFn: () => client.get('faq/category', { searchParams: { tab } }).json<FaqCategoryResponse>(),
		select: (data) => data.data,
	});
}
