import Image from 'next/image';
import Link from 'next/link';

export function HeaderLogo() {
	return (
		<Link href={'#'} className="relative lg:w-[140px] w-[110px] aspect-[7/4]">
			<Image src="/logo.svg" alt="Kia logo" fill priority />
		</Link>
	);
}
