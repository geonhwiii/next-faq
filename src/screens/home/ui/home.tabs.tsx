import { Tabs } from '@/shared/ui/tabs';

export function HomeTabs() {
	return (
		<Tabs
			className="mb-[var(--px-lg)]"
			defaultValue="CONSULT"
			tabs={[
				{
					label: '서비스 도입',
					value: 'CONSULT',
					content: <div>HELLO WORLD</div>,
				},
				{
					label: '서비스 이용',
					value: 'USAGE',
					content: <div>HELLO WORLD 2</div>,
				},
			]}
		/>
	);
}
