import { AppInfo } from '@/features/app-info';
import { HomeInquiry, HomeProcessInfo, HomeTabs, HomeTitle } from './ui';

export function HomeScreen() {
	return (
		<div>
			<HomeTitle />
			<HomeTabs />
			<HomeInquiry />
			<HomeProcessInfo />
			<AppInfo />
		</div>
	);
}
