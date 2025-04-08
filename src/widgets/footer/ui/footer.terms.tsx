'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { termsQueryOptions } from '../api';
import type { TermsClassId, TermsItem } from '@/types/terms';
import { useCallback } from 'react';

export function FooterTerms() {
	const openTermsDialog = (terms: TermsItem[]) => {
		console.log(terms);
	};

	return (
		<div className="h-12 md:h-fit flex items-center lg:justify-end gap-6 *:text-white *:hover:underline">
			<TermsButton termsClassId="JOIN_SERVICE_USE">
				<b>{'개인정보 처리방침'}</b>
			</TermsButton>
			<TermsButton termsClassId="STARTADMIN_ADMIN_PRIVACY" onClickTerms={openTermsDialog}>
				<span>{'이용 약관'}</span>
			</TermsButton>
		</div>
	);
}

type ButtonProps = {
	termsClassId: TermsClassId;
	children: React.ReactNode;
	onClickTerms?: (terms: TermsItem[]) => void;
};

function TermsButton({ termsClassId, children, onClickTerms }: ButtonProps) {
	const { data } = useSuspenseQuery(termsQueryOptions({ termsClassId }));

	const onClick = useCallback(() => onClickTerms?.(data.terms), [data.terms, onClickTerms]);

	return (
		<button className="cursor-pointer" onClick={onClick}>
			{children}
		</button>
	);
}
