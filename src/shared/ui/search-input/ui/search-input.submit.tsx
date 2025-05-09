import { cn } from '@/shared/utils/cn';

export function SearchInputSubmit() {
	return (
		<button
			type="submit"
			className={cn(
				'absolute top-px right-px size-[calc(var(--btn-xlg2)-2px)] flex items-center justify-center cursor-pointer',
				'before:bg-[url(/icons/ic_search.svg)] before:bg-no-repeat before:content-[""] before:size-[var(--ic-md)] before:bg-cover',
			)}
		>
			<span className="sr-only">검색</span>
		</button>
	);
}
