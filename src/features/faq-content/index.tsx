'use client';

import { SearchFilter } from '@/entities/search-filter';
import { SearchField } from '@/entities/search-field';
import { useForm } from 'react-hook-form';
import type { FaqFormData } from './data/schema';
import { CATEGORY_ID_OPTIONS } from './data/options';

type Props = {
	tab: 'CONSULT' | 'USAGE';
};

// TODO : tab이 변경될 때 subscription으로 form reset하기

export function FaqContent({ tab }: Props) {
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
			<SearchFilter control={control} options={CATEGORY_ID_OPTIONS} />
		</form>
	);
}
