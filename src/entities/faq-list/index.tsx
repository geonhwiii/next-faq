import { Accordion } from '@/shared/ui/accordion';
import { FaqListItem } from './ui';
import { useQuery } from '@tanstack/react-query';
import { faqListQueryOptions } from './api';
import type { FaqSearchParams } from '@/types/faq';

export function FaqList({ tab, faqCategoryID }: Pick<FaqSearchParams, 'tab' | 'faqCategoryID'>) {
	const { data } = useQuery(faqListQueryOptions({ tab, limit: 10, offset: 0, faqCategoryID }));
	return (
		<Accordion>
			{data?.items.map((item) => (
				<FaqListItem
					key={item.id}
					value={String(item.id)}
					category={item.subCategoryName}
					title={item.question}
					content={item.answer}
				/>
			))}
		</Accordion>
	);
}
