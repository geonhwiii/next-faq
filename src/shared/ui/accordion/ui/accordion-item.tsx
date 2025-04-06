import { cn } from '@/shared/utils/cn';
import { useAccordionContext } from './accordion';

type AccordionItemProps = {
	value: string;
	className?: string;
	children: React.ReactNode;
};

export function AccordionItem({ value, className = '', children }: AccordionItemProps) {
	const { expandedValue } = useAccordionContext();
	const isExpanded = expandedValue === value;

	return (
		<div className={cn('', className)} data-expanded={isExpanded}>
			{children}
		</div>
	);
}
