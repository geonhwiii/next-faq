import { Accordion } from '@/shared/ui/accordion';
import { FaqListItem } from './ui/faq-list.item';

export function FaqList() {
	return (
		<Accordion>
			<FaqListItem value="item-1" category="카테고리 1" title="제목 1" content="내용 1" />
			<FaqListItem
				value="item-2"
				category="카테고리 2"
				title="제목 2"
				content="업무 시간에는 이용 건별 별도 결제 없이 편리하게 업무용 차량을 이용할 수 있고(대여 요금은 소속 회사에서 부담), "
			/>
		</Accordion>
	);
}
