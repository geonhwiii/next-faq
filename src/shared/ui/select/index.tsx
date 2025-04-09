import { cn } from '@/shared/utils/cn';

export type SelectOption = {
	value: string;
	label: string;
};

type SelectProps = {
	className?: string;
	options: SelectOption[];
	value: string;
	onChange: (value: string) => void;
};

export function Select({ options, value, onChange, className }: SelectProps) {
	const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		onChange(e.target.value);
	};
	return (
		<select className={cn('w-full', className)} value={value} onChange={onChangeSelect}>
			{options.map((option) => (
				<option key={option.value} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
	);
}
