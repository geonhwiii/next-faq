import Link from 'next/link';
import { headerMenus } from '../data';
import { cn } from '@/shared/utils/cn';

export function HeaderNavItems() {
	return (
		<ul className={cn('lg:flex lg:items-center lg:justify-end lg:gap-4 lg:mt-0', 'mt-20')}>
			{headerMenus.map(({ label, href }) => (
				<li key={label} className="lg:mx-4">
					<Link
						href={href}
						className={cn(
							'block lg:px-1 font-semibold lg:text-lg lg:leading-[var(--header-height)]',
							'text-[24px] leading-[56px] text-[#000] mb-[8px] text-center',
						)}
					>
						{label}
					</Link>
				</li>
			))}
		</ul>
	);
}
