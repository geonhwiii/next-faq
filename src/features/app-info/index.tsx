import { GOOGLE_PLAY_LINK, APP_STORE_LINK } from '@/shared/data/link';
import { AppInfoLink, AppInfoTitle } from './ui';

export function AppInfo() {
	return (
		<div className="bg-gray-10 rounded-2xl flex flex-wrap justify-center mt-12 overflow-hidden p-8 space-y-4 md:space-y-6">
			<AppInfoTitle />
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<AppInfoLink type="android" href={GOOGLE_PLAY_LINK} />
				<AppInfoLink type="ios" href={APP_STORE_LINK} />
			</div>
		</div>
	);
}
