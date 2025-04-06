import { Tabs } from '@/shared/ui/tabs';
import { SearchForm } from '@/entities/search-form';

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
						content: (
							<div>
								<SearchForm />
								HELLO WORLD
							</div>
						),
					},
					{
						label: '서비스 이용',
						value: 'USAGE',
						content: (
							<div>
								<SearchForm />
								HELLO WORLD 2
							</div>
						),
					},
				]}
			/>
		</div>
	);
}
