import { cn } from '@/shared/utils/cn';

export function HomeTitle() {
	return (
		<h1
			className={cn(
				'flex flex-col justify-center h-[var(--h1-height)]',
				'text-[length:var(--h1-fsize)] font-bold leading-[var(--line-height-sm)]',
			)}
		>
			{'자주 묻는 질문'}
			<em className="text-[length:var(--h1-fsize-sm)] text-base font-normal mt-[0.4em]">
				{'궁금하신 내용을 빠르게 찾아보세요.'}
			</em>
		</h1>
	);
}
