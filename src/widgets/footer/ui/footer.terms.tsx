'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { FooterTermsPrivacy } from './footer.terms.privacy';

const FooterTermsService = dynamic(() => import('./footer.terms.service').then((mod) => mod.FooterTermsService), {
	ssr: false,
});

export function FooterTerms() {
	return (
		<div className="h-12 md:h-fit flex items-center lg:justify-end gap-6 *:text-white *:hover:underline">
			<FooterTermsPrivacy />
			<Suspense>
				<FooterTermsService />
			</Suspense>
		</div>
	);
}
