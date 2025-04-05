import { HomeInquiry, HomeProcessInfo, HomeTabs, HomeTitle } from './ui';

export function HomeScreen() {
	return (
		<div>
			<HomeTitle />
			<HomeTabs />
			<HomeInquiry />
			<HomeProcessInfo />
		</div>
	);
}
