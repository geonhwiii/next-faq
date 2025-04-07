'use client';

import { SearchFilter } from '@/entities/search-filter';
import { SearchField } from '@/entities/search-field';
import { useForm } from 'react-hook-form';
import type { FaqFormData } from './data/schema';
import { FaqList } from '@/entities/faq-list';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { faqListQueryOptions } from './api/query';

type Props = {
	tab: 'CONSULT' | 'USAGE';
};

// TODO : tab이 변경될 때 subscription으로 form reset하기

export function FaqContent({ tab }: Props) {
	const { data: options } = useQuery(faqListQueryOptions({ tab }));
	const { handleSubmit, control } = useForm<FaqFormData>({
		defaultValues: {
			question: '',
			faqCategoryID: '',
		},
	});

	const onSubmit = ({ question, faqCategoryID }: FaqFormData) => {
		console.log('[SUBMIT] :', { tab, question, faqCategoryID });
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<SearchField control={control} />
			<SearchFilter control={control} options={options ?? []} />
			<FaqList />
		</form>
	);
}
