import { Accordion } from '@/shared/ui/accordion';
import { FaqListItem } from './ui';
import { useInfiniteQuery } from '@tanstack/react-query';
import { faqListInfiniteQueryOptions } from './api';
import type { FaqSearchParams } from '@/types/faq';
import { SearchMore } from '@/entities/search-more';

export function FaqList({ tab, faqCategoryID, question }: Pick<FaqSearchParams, 'tab' | 'faqCategoryID' | 'question'>) {
	const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery(
		faqListInfiniteQueryOptions({ tab, faqCategoryID, question }),
	);

	return (
		<div className="space-y-4">
			<Accordion>
				{data?.pages.map((page) =>
					page.items.map((item) => (
						<FaqListItem
							key={item.id}
							value={String(item.id)}
							category={item.categoryName}
							subCategoryName={item.subCategoryName}
							title={item.question}
							content={item.answer}
						/>
					)),
				)}
			</Accordion>
			<SearchMore onClick={() => fetchNextPage()} hasNextPage={hasNextPage} isFetching={isFetchingNextPage} />
		</div>
	);
}
