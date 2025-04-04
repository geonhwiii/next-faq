import Link from 'next/link';

export function FooterTerms() {
	return (
		<div className="h-12 md:h-fit flex items-center lg:justify-end gap-6 *:text-white *:hover:underline">
			<Link href={'#'}>
				<b>{'개인정보 처리방침'}</b>
			</Link>
			<Link href={'#'}>
				<span>{'이용 약관'}</span>
			</Link>
		</div>
	);
}
