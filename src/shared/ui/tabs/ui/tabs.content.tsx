import { useTabsContext } from './tabs';

type Props = {
	value: string;
	children: React.ReactNode;
	className?: string;
};

export function TabsContent({ value, children, className = '' }: Props) {
	const { selectedTab } = useTabsContext();
	if (selectedTab !== value) {
		return null;
	}
	return <div className={`mt-4 ${className}`}>{children}</div>;
}
