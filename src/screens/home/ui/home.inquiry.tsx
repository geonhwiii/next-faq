import { Inquiry } from '@/features/inquiry';

export function HomeInquiry() {
	return (
		<div>
			<h2 className="m-[var(--heading-2-margin)] text-[length:var(--heading-2)] font-bold leading-[var(--line-height-sm)]">
				{'서비스 문의'}
			</h2>
			<Inquiry />
		</div>
	);
}
