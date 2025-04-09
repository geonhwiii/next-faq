import Image from 'next/image';
import { COPYRIGHT } from '../data';

export function FooterCopyright() {
	return (
		<div>
			<div className="relative aspect-[2/1] h-[32px] md:h-[48px] lg:h-[56px]">
				<Image src="/icons/kia.svg" alt="Kia logo" fill />
			</div>
			<span className="text-gray-400 text-xs md:text-sm">{COPYRIGHT}</span>
		</div>
	);
}
