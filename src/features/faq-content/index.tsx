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
import { SearchInfo } from '@/entities/search-info';

type Props = {
	tab: FaqCategoryTab;
};

// TODO : tab이 변경될 때 subscription으로 form reset하기

export function FaqContent({ tab }: Props) {
	const { handleSubmit, watch, control, setValue } = useForm<FaqFormData>({
		defaultValues: {
			question: '',
			faqCategoryID: '',
		},
	});
	const [question, setQuestion] = useState<string>('');
	const { data: options } = useQuery(faqCategoryQueryOptions({ tab }));

	const faqCategoryID = watch('faqCategoryID');

	const onSubmit = ({ question }: FaqFormData) => setQuestion(question);

	const onClearQuestion = () => {
		setQuestion('');
		setValue('question', '');
		setValue('faqCategoryID', '');
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<SearchField control={control} />
			{!!question.length && (
				<SearchInfo onReset={onClearQuestion} tab={tab} faqCategoryID={faqCategoryID} question={question} />
			)}
			<SearchFilter control={control} options={options ?? []} />
			<FaqList tab={tab} faqCategoryID={faqCategoryID} question={question} />
		</form>
	);
}
