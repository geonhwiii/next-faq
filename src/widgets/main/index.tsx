type Props = {
	children: React.ReactNode;
};

export function Main({ children }: Props) {
	return (
		<main className="min-h-[calc(100vh-var(--header-height)-var(--footer-height))] bg-background overflow-hidden px-[var(--side-padding)] pb-[var(--bottom-padding)]">
			<div className="max-w-[var(--max-container-width)] mx-auto">{children}</div>
		</main>
	);
}
