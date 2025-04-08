import { cn } from '@/shared/utils/cn';
import { FooterAddress, FooterCopyright, FooterTerms } from './ui';
import { Suspense } from 'react';

export function Footer() {
	return (
		<footer className="bg-footer-background px-[var(--side-padding)]">
			<div
				className={cn(
					'max-w-[var(--max-width)] mx-auto h-[var(--footer-height)] leading-[var(--line-height)] pt-4.5 md:pt-[34px] pb-7 md:pb-11 lg:py-0',
					'flex flex-col-reverse justify-between lg:flex-row lg:items-center',
				)}
			>
				<FooterCopyright />
				<div className="md:space-y-2.5 w-full">
					<Suspense>
						<FooterTerms />
					</Suspense>
					<FooterAddress />
				</div>
			</div>
		</footer>
	);
}
