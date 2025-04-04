import { HeaderNav, HeaderLogo } from './ui';

export function Header() {
	return (
		<header className="sticky top-0 z-100 bg-background lg:px-12 px-6">
			<div className="flex items-center mx-auto flex-wrap max-w-[var(--max-width)] lg:h-20 h-14">
				<HeaderLogo />
				<HeaderNav />
			</div>
		</header>
	);
}
