import { cn } from '@/shared/utils/cn';

type Props = {
	children: React.ReactNode;
	className?: string;
};

export function TabsList({ children, className }: Props) {
	return <div className={cn('flex', className)}>{children}</div>;
}
