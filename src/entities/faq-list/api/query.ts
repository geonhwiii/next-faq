import { queryOptions } from '@tanstack/react-query';
import { client } from '@/shared/utils/client';
import type { FaqSearchParams, FaqResponse } from '@/types/faq';

export function faqListQueryOptions(searchParams: FaqSearchParams) {
	return queryOptions({
		queryKey: ['faq-list', searchParams],
		queryFn: () => client.get('faq', { searchParams }).json<FaqResponse>(),
	});
}
