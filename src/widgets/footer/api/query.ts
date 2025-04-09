import { queryOptions } from '@tanstack/react-query';
import { client } from '@/shared/utils/client';
import type { TermsParams, TermsResponse } from '@/types/terms';

export function termsQueryOptions({ termsClassId }: TermsParams) {
	return queryOptions({
		queryKey: ['terms', { termsClassId }],
		queryFn: () => client.get('terms', { searchParams: { termsClassId } }).json<TermsResponse>(),
	});
}
