import { HeaderNavPC, HeaderLogo, HeaderNavMobile } from './ui';

export function Header() {
	return (
		<header className="sticky top-0 z-100 bg-background px-[var(--side-padding)]">
			<div className="flex items-center mx-auto flex-wrap max-w-[var(--max-width)] h-[var(--header-height)]">
				<HeaderLogo />
				<HeaderNavPC />
				<HeaderNavMobile />
			</div>
		</header>
	);
}
