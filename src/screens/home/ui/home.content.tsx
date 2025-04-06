import { Tabs } from '@/shared/ui/tabs';
import { FaqContent } from '@/features/faq-content';

export function HomeContent() {
	return (
		<div>
			<Tabs
				className="mb-[var(--px-lg)]"
				defaultValue="CONSULT"
				tabs={[
					{
						label: '서비스 도입',
						value: 'CONSULT',
						content: <FaqContent tab="CONSULT" />,
					},
					{
						label: '서비스 이용',
						value: 'USAGE',
						content: <FaqContent tab="USAGE" />,
					},
				]}
			/>
		</div>
	);
}
