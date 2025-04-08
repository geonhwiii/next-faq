'use client';

import { FooterTermsService } from './footer.terms.service';
import { FooterTermsPrivacy } from './footer.terms.privacy';

export function FooterTerms() {
	return (
		<div className="h-12 md:h-fit flex items-center lg:justify-end gap-6 *:text-white *:hover:underline">
			<FooterTermsPrivacy />
			<FooterTermsService />
		</div>
	);
}
