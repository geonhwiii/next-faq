import { processList } from './data/process';
import { ProcessInfoItem } from './ui';

export function ProcessInfo() {
	return (
		<div className="flex flex-col lg:flex-row gap-[var(--space-md)] lg:gap-[calc(var(--space-md)/2)]">
			{processList.map((item, index) => (
				<ProcessInfoItem key={item.id} stepArrow={index !== 0} {...item} />
			))}
		</div>
	);
}
