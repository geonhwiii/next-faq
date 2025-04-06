import { cn } from '@/shared/utils/cn';
import { useRadioGroupContext } from '../ui/radio-group';

type Props = {
	value: string;
	children: React.ReactNode;
	className?: string;
};

export function RadioGroupItem({ value, children, className = '' }: Props) {
	const { selectedValue, setSelectedValue } = useRadioGroupContext();
	const isSelected = selectedValue === value;

	return (
		<label className={cn('cursor-pointer h-[var(--btn-md)] overflow-hidden relative', className)}>
			<input
				data-testid={`radio-${value}`}
				type="radio"
				value={value}
				checked={isSelected}
				className="sr-only"
				onChange={() => setSelectedValue(value)}
			/>
			<i
				className={cn(
					'flex justify-center items-center rounded-[calc(var(--btn-md)/2)] min-w-[var(--btn-md)] px-[var(--space-sm)] h-full',
					'font-semibold leading-[-.4px] text-[var(--font-md)]',
					isSelected ? 'bg-primary text-white' : 'bg-white text-primary',
				)}
			>
				{children}
			</i>
		</label>
	);
}
