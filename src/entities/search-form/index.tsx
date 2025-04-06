'use client';

import { SearchInput } from '@/shared/ui/search-input';
import { Controller, useForm } from 'react-hook-form';

type FormData = {
	keyword: string;
};

export function SearchForm() {
	const method = useForm<FormData>({
		defaultValues: {
			keyword: '',
		},
	});

	const onSubmit = (data: FormData) => {
		console.log(data);
	};

	return (
		<form onSubmit={method.handleSubmit(onSubmit)}>
			<Controller
				name="keyword"
				control={method.control}
				render={({ field }) => (
					<SearchInput
						type="text"
						{...field}
						showClear={!!field.value}
						onClear={() => method.setValue('keyword', '')}
					/>
				)}
			/>
		</form>
	);
}
