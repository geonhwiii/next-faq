import { SearchInput } from '@/shared/ui/search-input';
import { HomeTabs } from './home.tabs';

export function HomeContent() {
	return (
		<div>
			<HomeTabs />
			<SearchInput placeholder="찾으시는 내용을 입력해 주세요" />
		</div>
	);
}
