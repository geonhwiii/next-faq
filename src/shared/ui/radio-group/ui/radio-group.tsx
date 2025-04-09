import { cn } from '@/shared/utils/cn';
import { createContext, useContext, useState } from 'react';

type RadioGroupProps = {
	className?: string;
	defaultValue?: string;
	value?: string;
	children: React.ReactNode;
	onChange?: (value: string) => void;
	onValueChange?: (value: string) => void;
};

type RadioGroupContextValue = {
	selectedValue: string;
	setSelectedValue: (value: string) => void;
};

const RadioGroupContext = createContext<RadioGroupContextValue | undefined>(undefined);

export function RadioGroup({
	defaultValue = '',
	value,
	children,
	className = '',
	onChange,
	onValueChange,
}: RadioGroupProps) {
	const [selectedValue, setSelectedValue] = useState<string>(defaultValue);
	const currentValue = value ?? selectedValue;

	const handleValueChange = (newValue: string) => {
		if (!value) {
			setSelectedValue(newValue);
		}
		onChange?.(newValue);
		onValueChange?.(newValue);
	};

	return (
		<RadioGroupContext.Provider value={{ selectedValue: currentValue, setSelectedValue: handleValueChange }}>
			<div className={cn('flex flex-wrap items-center gap-0.5', className)}>{children}</div>
		</RadioGroupContext.Provider>
	);
}

export function useRadioGroupContext() {
	const context = useContext(RadioGroupContext);
	if (!context) {
		throw new Error('RadioGroup 컴포넌트를 감싸주세요.');
	}
	return context;
}
