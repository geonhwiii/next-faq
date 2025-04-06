import { cn } from '@/shared/utils/cn';
import { SearchInputClear, SearchInputSubmit } from './ui';

type Props = React.ComponentProps<'input'>;

export function SearchInput({ className, type, ...props }: Props) {
	return (
		<div className="bg-[var(--gray-10)] flex justify-center mb-4 md:p-4">
			<div className="relative w-[var(--search-bar-width)]">
				<input
					type={type}
					style={{ '--clear-space': '16px' } as React.CSSProperties}
					className={cn(
						'w-full pr-[calc(var(--ic-sm)+var(--clear-space)+var(--btn-xlg2)-2px)] bg-white text-base font-medium h-[var(--btn-xlg2)] border border-[var(--midnight-900)] pl-4 outline-none',
						className,
					)}
					{...props}
				/>
				<SearchInputClear onClick={() => {}} />
				<SearchInputSubmit onClick={() => {}} />
			</div>
		</div>
	);
}
