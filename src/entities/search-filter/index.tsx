'use client';

import { type Control, Controller } from 'react-hook-form';
import { RadioGroup, RadioGroupItem } from '@/shared/ui/radio-group';
import type { FaqFormData } from '@/features/faq-content/data/schema';
import type { FaqCategoryTab } from '@/types/faq';

type Props = {
	control: Control<FaqFormData>;
	options: { name: string; categoryID: string }[];
};

export function SearchFilter({ control, options }: Props) {
	return (
		<div className="mb-[var(--px-md)]">
			<Controller
				name="faqCategoryID"
				control={control}
				render={({ field: { onChange, value } }) => (
					<RadioGroup value={value} onValueChange={onChange}>
						<RadioGroupItem value="">{'전체'}</RadioGroupItem>
						{options.map((option) => (
							<RadioGroupItem key={option.categoryID} value={option.categoryID}>
								{option.name}
							</RadioGroupItem>
						))}
					</RadioGroup>
				)}
			/>
		</div>
	);
}
