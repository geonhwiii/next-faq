import { createContext, useContext, useState } from 'react';

type TabsProps = {
	className?: string;
	defaultValue: string;
	children: React.ReactNode;
};

type TabsContextValue = {
	selectedTab: string;
	setSelectedTab: (value: string) => void;
};

const TabsContext = createContext<TabsContextValue | undefined>(undefined);

export function Tabs({ defaultValue = '', children, className = '' }: TabsProps) {
	const [selectedTab, setSelectedTab] = useState<string>(defaultValue);

	return (
		<TabsContext.Provider value={{ selectedTab, setSelectedTab }}>
			<div className={className}>{children}</div>
		</TabsContext.Provider>
	);
}

export function useTabsContext() {
	const context = useContext(TabsContext);
	if (!context) {
		throw new Error('Tabs 컴포넌트를 감싸주세요.');
	}
	return context;
}
