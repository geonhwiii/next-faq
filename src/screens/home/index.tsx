import { AppInfo } from '@/features/app-info';
import { HomeInquiry, HomeProcessInfo, HomeContent, HomeTitle } from './ui';

export function HomeScreen() {
	return (
		<div>
			<HomeTitle />
			<HomeContent />
			<HomeInquiry />
			<HomeProcessInfo />
			<AppInfo />
		</div>
	);
}
