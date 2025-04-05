import Link from 'next/link';
import { headerMenus } from '../data';

export function HeaderNav() {
	return (
		<nav className="flex-1">
			<ul className="flex items-center justify-end gap-4">
				{headerMenus.map(({ label, href }) => (
					<li key={label} className="lg:mx-4">
						<Link href={href} className="block px-1 font-semibold text-lg leading-[var(--header-height)]">
							{label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
