import { cn } from '@/shared/utils/cn';
import Image from 'next/image';

type Props = {
	className?: string;
	href: string;
	icon: string;
	name: string;
	description?: string;
	download?: boolean;
};

export function InquiryLink({ className, href, icon, name, description, download }: Props) {
	return (
		<a
			href={href}
			download={download}
			className={cn(
				'cursor-pointer flex items-center md:justify-center flex-1 gap-2 h-[var(--btn-xxlg)] border border-primary bg-white hover:bg-gray-50 px-[1.4em]',
				className,
			)}
		>
			<div className="relative aspect-[1/1] size-[var(--ic-lg)]">
				<Image src={icon} alt={name} fill />
			</div>
			<div className="flex flex-col">
				<span className="text-[var(--btn-xxlg-size)] font-semibold">{name}</span>
				<span className="text-sm text-gray-500">{description}</span>
			</div>
		</a>
	);
}
