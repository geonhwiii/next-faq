import { cn } from '@/shared/utils/cn';
import { useAccordionContext } from './accordion';
type AccordionTriggerProps = {
	value: string;
	className?: string;
	children: React.ReactNode;
};

export function AccordionTrigger({ value, className = '', children }: AccordionTriggerProps) {
	const { expandedValue, setExpandedValue } = useAccordionContext();
	const isExpanded = expandedValue === value;

	const handleClick = () => {
		setExpandedValue(isExpanded ? '' : value);
	};

	return (
		<button
			type="button"
			className={cn(
				'w-full relative text-left flex items-center overflow-hidden py-[var(--faq-list-a-padding-v)] pr-[calc(var(--px-xlg)+1.6em)] cursor-pointer',
				'text-[length:var(--faq-list-a-size)] leading-[var(--line-height-sm)] text-primary',
				'aria-expanded:bg-gray-10',
				className,
			)}
			onClick={handleClick}
			aria-expanded={isExpanded}
		>
			{children}
			<div
				className={cn(
					'absolute size-[var(--ic-md)] right-[calc((var(--px-xlg)-var(--ic-md))/2)]',
					'transition-transform duration-400 ease-[var(--cubic-bezier-primary)]',
					'bg-[url(/icons/ic_arrow.svg)] bg-center bg-no-repeat bg-contain',
					isExpanded ? 'rotate-180' : 'rotate-0',
				)}
			/>
		</button>
	);
}
