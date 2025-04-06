'use client';

import { cn } from '@/shared/utils/cn';

export type InputProps = React.ComponentProps<'input'>;

export function Input({ className, type, ...props }: InputProps) {
	return (
		<input
			type={type}
			className={cn(
				'w-full pr-[calc(var(--ic-sm)+var(--clear-space)+var(--btn-xlg2)-2px)] bg-white text-base font-medium h-[var(--btn-xlg2)] border border-[var(--midnight-900)] pl-4 outline-none',
				className,
			)}
			{...props}
		/>
	);
}
