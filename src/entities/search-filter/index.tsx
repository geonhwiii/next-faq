'use client';

import { type Control, Controller } from 'react-hook-form';
import { RadioGroup, RadioGroupItem } from '@/shared/ui/radio-group';

const FILTER_OPTIONS = [
	{ label: '전체', value: '' },
	{ label: '서비스 상품', value: 'PRODUCT' },
	{ label: '도입 상담', value: 'COUNSELING' },
	{ label: '계약', value: 'CONTRACT' },
] as const;

import type { FaqFormData } from '@/features/faq-content/data/schema';

type Props = {
	control: Control<FaqFormData>;
	options: { label: string; value: string }[];
};

export function SearchFilter({ control, options }: Props) {
	return (
		<Controller
			name="faqCategoryID"
			control={control}
			render={({ field: { onChange, value } }) => (
				<RadioGroup defaultValue={value} onChange={onChange}>
					{options.map((option) => (
						<RadioGroupItem key={option.value} value={option.value}>
							{option.label}
						</RadioGroupItem>
					))}
				</RadioGroup>
			)}
		/>
	);
}
