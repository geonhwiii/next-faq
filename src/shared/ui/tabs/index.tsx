'use client';

import { Tabs as Root, TabsTrigger, TabsContent, TabsList } from './ui';

type TabsProps<T> = {
	className?: string;
	defaultValue: T;
	tabs: {
		label: string;
		value: T;
		content: React.ReactNode;
	}[];
};

export function Tabs<T extends string>({ className, defaultValue, tabs }: TabsProps<T>) {
	return (
		<Root defaultValue={defaultValue}>
			<TabsList className={className}>
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
