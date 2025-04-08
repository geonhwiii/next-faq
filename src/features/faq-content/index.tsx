'use client';

import { SearchFilter } from '@/entities/search-filter';
import { SearchField } from '@/entities/search-field';
import { useForm } from 'react-hook-form';
import type { FaqFormData } from './data/schema';
import { FaqList } from '@/entities/faq-list';
import { useQuery } from '@tanstack/react-query';
import { faqCategoryQueryOptions } from './api/query';
import { useState } from 'react';
import type { FaqCategoryTab } from '@/types/faq';

type Props = {
	tab: FaqCategoryTab;
};

// TODO : tab이 변경될 때 subscription으로 form reset하기

export function FaqContent({ tab }: Props) {
	const { handleSubmit, watch, control } = useForm<FaqFormData>({
		defaultValues: {
			question: '',
			faqCategoryID: '',
		},
	});
	const [question, setQuestion] = useState<string>('');
	const { data: options } = useQuery(faqCategoryQueryOptions({ tab }));

	const onSubmit = ({ question }: FaqFormData) => setQuestion(question);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<SearchField control={control} />
			<SearchFilter control={control} options={options ?? []} />
			<FaqList tab={tab} faqCategoryID={watch('faqCategoryID')} question={question} />
		</form>
	);
}
