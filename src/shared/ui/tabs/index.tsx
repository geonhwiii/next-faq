'use client';

import { Tabs as Root, TabsTrigger, TabsContent, TabsList } from './ui';

type TabsProps = {
	className?: string;
	defaultValue: string;
	tabs: {
		label: string;
		value: string;
		content: React.ReactNode;
	}[];
};

export function Tabs({ className, defaultValue, tabs }: TabsProps) {
	return (
		<Root className={className} defaultValue={defaultValue}>
			<TabsList>
				{tabs.map((tab) => (
					<TabsTrigger key={tab.value} value={tab.value}>
						{tab.label}
					</TabsTrigger>
				))}
			</TabsList>
			{tabs.map((tab) => (
				<TabsContent key={tab.value} value={tab.value}>
					{tab.content}
				</TabsContent>
			))}
		</Root>
	);
}
