import { queryOptions } from '@tanstack/react-query';
import { client } from '@/shared/utils/client';
import type { FaqCategoryParams, FaqCategoryResponse } from '@/app/api/faq/category/route';

export function faqListQueryOptions({ tab }: FaqCategoryParams) {
	return queryOptions({
		queryKey: ['faq-list', tab],
		queryFn: () => client.get('faq/category', { searchParams: { tab } }).json<FaqCategoryResponse>(),
		select: (data) => data.data,
	});
}
