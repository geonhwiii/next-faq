import { useSuspenseQuery } from '@tanstack/react-query';
import { termsQueryOptions } from '../api';

export function FooterTermsPrivacy() {
	useSuspenseQuery(termsQueryOptions({ termsClassId: 'STARTADMIN_ADMIN_PRIVACY' }));
	return (
		<button>
			<b>{'개인정보 처리방침'}</b>
		</button>
	);
}
