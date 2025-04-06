import { cn } from '@/shared/utils/cn';

type Props = {
	onClick?: () => void;
};

export function SearchInputClear({ onClick }: Props) {
	return (
		<button
			type="button"
			data-ui-click="clear"
			className={cn(
				'absolute top-px right-[calc(-1px+var(--btn-xlg2))] h-[calc(100%-2px)] w-[calc(var(--ic-sm)+var(--clear-space))] flex items-center justify-center cursor-pointer',
				'before:bg-[url(/icons/ic_clear.svg)] before:bg-no-repeat before:content-[""] before:size-[var(--ic-sm)] before:bg-cover',
			)}
			onClick={onClick}
		>
			<span className="sr-only">다시입력</span>
		</button>
	);
}
