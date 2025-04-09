'use client';

import { useQuery } from '@tanstack/react-query';
import { termsQueryOptions } from '../api';

export function FooterTermsPrivacy() {
	useQuery(termsQueryOptions({ termsClassId: 'STARTADMIN_ADMIN_PRIVACY' }));
	return (
		<button>
			<b>{'개인정보 처리방침'}</b>
		</button>
	);
}
