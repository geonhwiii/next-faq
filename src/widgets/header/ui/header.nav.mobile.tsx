'use client';

import { useState } from 'react';
import { HeaderNavItems } from './header.nav.items';
import { cn } from '@/shared/utils/cn';

export function HeaderNavMobile() {
	const [isOpen, setIsOpen] = useState<boolean>();
	return (
		<div className="lg:hidden flex flex-1 justify-end ml-2">
			<nav
				className={cn(
					'bg-background fixed bottom-0 -left-full top-[var(--header-height)] flex flex-col w-full px-[var(--side-padding)]',
					isOpen && 'left-0 nav-opened',
				)}
			>
				<HeaderNavItems />
			</nav>
			<button className={cn('nav-toggle', isOpen && 'nav-opened')} onClick={() => setIsOpen(!isOpen)}>
				메뉴 열기/닫기
			</button>
		</div>
	);
}
