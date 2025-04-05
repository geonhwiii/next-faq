import { InquiryLink } from './ui';

export function Inquiry() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--space-md)]">
			<InquiryLink download href="/files/proposal.pdf" icon="/icons/ic_download.svg" name="서비스 제안서 다운로드" />
			<InquiryLink href="#" icon="/icons/ic_write.svg" name="상담 문의 등록하기" />
			<InquiryLink
				className="md:col-span-2 lg:col-span-1"
				href="https://pf.kakao.com/_xfLxjdb"
				icon="/icons/ic_talk.svg"
				name="카톡으로 문의하기"
				description="ID : 기아 비즈"
			/>
		</div>
	);
}
