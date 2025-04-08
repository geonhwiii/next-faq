import { cn } from '@/shared/utils/cn';

export interface SelectOption {
	value: string;
	label: string;
}

type SelectProps = {
	options: SelectOption[];
	value: string;
	onChange: (value: string) => void;
	className?: string;
};

export function Select({ options, value, onChange, className }: SelectProps) {
	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		onChange(e.target.value);
	};
	return (
		<select className={cn('w-full', className)} value={value} onChange={handleChange}>
			{options.map((option) => (
				<option key={option.value} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
	);
}
