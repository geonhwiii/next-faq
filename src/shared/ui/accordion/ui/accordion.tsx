import { cn } from '@/shared/utils/cn';
import { createContext, useContext, useState } from 'react';

type AccordionProps = {
	className?: string;
	children: React.ReactNode;
};

type AccordionContextValue = {
	expandedValue: string;
	setExpandedValue: (value: string) => void;
};

const AccordionContext = createContext<AccordionContextValue | undefined>(undefined);

export function Accordion({ children, className = '' }: AccordionProps) {
	const [expandedValue, setExpandedValue] = useState<string>('');

	return (
		<AccordionContext.Provider value={{ expandedValue, setExpandedValue }}>
			<div className={cn('flex flex-col border-t-2 border-t-primary', className)}>{children}</div>
		</AccordionContext.Provider>
	);
}

export function useAccordionContext() {
	const context = useContext(AccordionContext);
	if (!context) {
		throw new Error('Accordion 컴포넌트를 감싸주세요.');
	}
	return context;
}
