import { cn } from '@/shared/utils/cn';
import { FooterAddress, FooterCopyright, FooterTerms } from './ui';

export function Footer() {
	return (
		<footer className="bg-footer-background px-6 md:px-12">
			<div
				className={cn(
					'max-w-[var(--max-width)] mx-auto pt-4.5 md:pt-[34px] pb-7 md:pb-11 lg:py-0 lg:h-[176px] h-[296px]',
					'flex flex-col-reverse justify-between lg:flex-row lg:items-center',
				)}
			>
				<FooterCopyright />
				<div className="md:space-y-2.5 w-full">
					<FooterTerms />
					<FooterAddress />
				</div>
			</div>
		</footer>
	);
}
