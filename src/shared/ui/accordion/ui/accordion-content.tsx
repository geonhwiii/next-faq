import { cn } from '@/shared/utils/cn';
import { useAccordionContext } from './accordion';
import { useEffect, useRef, useState } from 'react';

type AccordionContentProps = {
	value: string;
	className?: string;
	children: React.ReactNode;
};

export function AccordionContent({ value, className = '', children }: AccordionContentProps) {
	const { expandedValue } = useAccordionContext();
	const isExpanded = expandedValue === value;
	const contentRef = useRef<HTMLDivElement>(null);
	const [height, setHeight] = useState<number | undefined>(0);

	useEffect(() => {
		if (contentRef.current) {
			const contentHeight = contentRef.current.scrollHeight;
			setHeight(isExpanded ? contentHeight : 0);
		}
	}, [isExpanded]);

	return (
		<div
			ref={contentRef}
			className={cn(
				'overflow-hidden border-b border-b-gray-100 transition-[height] duration-400 ease-[var(--cubic-bezier-primary)]',
				className,
			)}
			style={{ height: height ? `${height}px` : '0px' }}
		>
			{children}
		</div>
	);
}
