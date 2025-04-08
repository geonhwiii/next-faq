import { cn } from '@/shared/utils/cn';

interface SearchMoreProps {
	onClick: () => void;
	hasNextPage: boolean;
	isFetching: boolean;
}

export function SearchMore({ onClick, hasNextPage, isFetching }: SearchMoreProps) {
	if (!hasNextPage) return null;

	return (
		<button
			className="flex justify-center items-center text-[length:var(--list-more-size)] w-full mt-[calc(var(--px-lg)-8px)] cursor-pointer"
			onClick={onClick}
			disabled={isFetching}
		>
			<i className={'list-more'} />
			{'더보기'}
		</button>
	);
}
