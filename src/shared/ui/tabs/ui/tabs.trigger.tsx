import { cn } from '@/shared/utils/cn';
import { useTabsContext } from './tabs';

type Props = {
	className?: string;
	value: string;
	children: React.ReactNode;
};

export function TabsTrigger({ value, children, className }: Props) {
	const { selectedTab, setSelectedTab } = useTabsContext();
	const isSelected = selectedTab === value;
	return (
		<button
			className={cn(
				'flex-1 text-[var(--tab-fsize)] min-h-[var(--btn-xlg2)] cursor-pointer',
				{
					'border-primary bg-primary text-white font-semibold': isSelected,
					'border border-midnight-100': !isSelected,
				},
				className,
			)}
			onClick={() => setSelectedTab(value)}
		>
			{children}
		</button>
	);
}
