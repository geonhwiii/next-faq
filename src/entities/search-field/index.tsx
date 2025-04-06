'use client';

import { SearchInput } from '@/shared/ui/search-input';
import { type Control, Controller } from 'react-hook-form';
import type { FaqFormData } from '@/features/faq-content/data/schema';

type Props = {
	control: Control<FaqFormData>;
};

export function SearchField({ control }: Props) {
	return (
		<Controller
			name="question"
			control={control}
			render={({ field }) => (
				<SearchInput type="text" {...field} showClear={!!field.value} onClear={() => field.onChange('')} />
			)}
		/>
	);
}
