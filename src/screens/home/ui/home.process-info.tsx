import { ProcessInfo } from '@/features/process-info';

export function HomeProcessInfo() {
	return (
		<div>
			<h2 className="heading-2">{'이용 프로세스 안내'}</h2>
			<ProcessInfo />
		</div>
	);
}
