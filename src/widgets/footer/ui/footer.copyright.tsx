import Image from 'next/image';

export function FooterCopyright() {
	return (
		<div>
			<div className="relative aspect-[2/1] h-8 md:h-12 lg:h-14">
				<Image src="/kia.svg" alt="Kia logo" fill />
			</div>
			<span className="text-gray-400 text-xs md:text-sm">{'© 2023 KIA CORP. All Rights Reserved.'}</span>
		</div>
	);
}
