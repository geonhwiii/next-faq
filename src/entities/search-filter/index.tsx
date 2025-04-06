'use client';

import { type Control, Controller } from 'react-hook-form';
import { RadioGroup, RadioGroupItem } from '@/shared/ui/radio-group';

import type { FaqFormData } from '@/features/faq-content/data/schema';

type Props = {
	control: Control<FaqFormData>;
	options: { label: string; value: string }[];
};

export function SearchFilter({ control, options }: Props) {
	return (
		<div className="mb-[var(--px-md)]">
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
		</div>
	);
}
