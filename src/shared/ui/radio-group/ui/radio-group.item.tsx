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
		<label className={className}>
			<input
				data-testid={`radio-${value}`}
				type="radio"
				value={value}
				checked={isSelected}
				onChange={() => setSelectedValue(value)}
			/>
			{children}
		</label>
	);
}
