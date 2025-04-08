import { cn } from '@/shared/utils/cn';
import { useInfiniteQuery } from '@tanstack/react-query';
import { faqListInfiniteQueryOptions } from '@/entities/faq-list/api';
import type { FaqCategoryTab } from '@/types/faq';

type Props = {
	onReset: () => void;
	tab: FaqCategoryTab;
	faqCategoryID: string;
	question: string;
};

export function SearchInfo({ onReset, tab, faqCategoryID, question }: Props) {
	const { data } = useInfiniteQuery(faqListInfiniteQueryOptions({ tab, faqCategoryID, question }));

	const totalRecords = data?.pages[0]?.pageInfo.totalRecord ?? 0;

	return (
		<div className="flex justify-between my-[var(--px-md)]">
			<h2 className="text-[length:var(--heading-info)] leading-[var(--line-height-sm)] font-bold">
				{'검색결과 총 '}
				<em>{totalRecords}</em>
				{'건'}
			</h2>
			<button
				className={cn(
					'flex items-center md:text-[16px] md:px-1 text-[14px] px-0.5 text-primary cursor-pointer',
					`before:bg-[url(/icons/ic_init.svg)] before:bg-no-repeat before:content-[""] before:size-[var(--ic-sm)] before:bg-cover before:mr-0.5`,
				)}
				onClick={onReset}
			>
				{'검색 초기화'}
			</button>
		</div>
	);
}
