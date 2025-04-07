import { Accordion } from '@/shared/ui/accordion';
import { FaqListItem } from './ui/faq-list.item';
import { useQuery } from '@tanstack/react-query';
import { faqListQueryOptions } from './api';
import type { FaqSearchParams } from '@/types/faq';

export function FaqList({ tab }: Pick<FaqSearchParams, 'tab'>) {
	const { data } = useQuery(faqListQueryOptions({ tab, limit: 10, offset: 0 }));
	return (
		<Accordion>
			{data?.items.map((item) => (
				<FaqListItem
					key={item.id}
					value={String(item.id)}
					category={item.categoryName}
					title={item.question}
					content={item.answer}
				/>
			))}
		</Accordion>
	);
}
