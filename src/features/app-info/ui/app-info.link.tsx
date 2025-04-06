import Image from 'next/image';
import Link from 'next/link';

type Props = {
	type: 'ios' | 'android';
	href: string;
};

export function AppInfoLink({ type, href }: Props) {
	return (
		<Link
			href={href}
			className="flex items-center justify-center xl:w-[392px] lg:w-[296px] w-[264px] lg:h-[60px] md:h-[56px] h-[48px] bg-white rounded-lg gap-1"
		>
			<div className="relative size-6">
				<Image src={`/icons/logo_${type === 'ios' ? 'appstore' : 'googleplay'}.svg`} alt="App Store" fill />
			</div>
			<span className="lg:text-[16px] text-[14px] font-semibold text-primary">
				{type === 'ios' ? 'App Store' : 'Google Play'}
			</span>
		</Link>
	);
}
