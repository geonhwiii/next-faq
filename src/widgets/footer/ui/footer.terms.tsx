'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { termsQueryOptions } from '../api';
import type { TermsClassId, TermsItem } from '@/types/terms';
import { useCallback, useState } from 'react';
import { Dialog } from '@/shared/ui/dialog';
import { Select } from '@/shared/ui/select';

export function FooterTerms() {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedTerms, setSelectedTerms] = useState<TermsItem[]>([]);

	const openTermsDialog = (terms: TermsItem[]) => {
		setSelectedTerms(terms);
		setIsOpen(true);
	};

	return (
		<div className="h-12 md:h-fit flex items-center lg:justify-end gap-6 *:text-white *:hover:underline">
			<TermsButton termsClassId="STARTADMIN_ADMIN_PRIVACY">
				<b>{'개인정보 처리방침'}</b>
			</TermsButton>
			<TermsButton termsClassId="JOIN_SERVICE_USE" onClickTerms={openTermsDialog}>
				<span>{'이용 약관'}</span>
			</TermsButton>
			<Dialog
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
				title="이용 약관"
				content={
					<>
						<Select
							className="mb-3"
							value="1"
							onChange={() => {}}
							options={[
								{ value: '1', label: '옵션 1' },
								{ value: '2', label: '옵션 2' },
								{ value: '3', label: '옵션 3' },
							]}
						/>
						<div className="**:!text-[12px] **:lg:!text-[14px] **:leading-[var(--line-height-sm)] **:break-all">
							<p dangerouslySetInnerHTML={{ __html: selectedTerms[0]?.contents }} />
						</div>
					</>
				}
			/>
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
