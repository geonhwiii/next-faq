'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { termsQueryOptions } from '../api';
import { Dialog } from '@/shared/ui/dialog';
import { useState } from 'react';
import { Select } from '@/shared/ui/select';
import { formatTimestampToDate } from '@/shared/utils/date';

export function FooterTermsService() {
	const [isOpen, setIsOpen] = useState(false);
	const { data } = useSuspenseQuery(termsQueryOptions({ termsClassId: 'JOIN_SERVICE_USE' }));
	const [selectedVersion, setSelectedVersion] = useState<string>(data.terms[0].termsVersion.toString());

	const options = data.terms.map((term) => ({
		value: term.termsVersion.toString(),
		label: `${formatTimestampToDate(term.startDate)} ~ ${term.endDate ? formatTimestampToDate(term.endDate) : '현재'}`,
	}));

	const __html = data?.terms.find((term) => term.termsVersion.toString() === selectedVersion)?.contents || '';

	return (
		<>
			<button onClick={() => setIsOpen(true)}>
				<span>{'이용 약관'}</span>
			</button>
			{isOpen && (
				<Dialog
					open
					onClose={() => setIsOpen(false)}
					title="이용 약관"
					content={
						<>
							<Select className="mb-3" value={selectedVersion} onChange={setSelectedVersion} options={options || []} />
							<div className="**:!text-[12px] **:lg:!text-[14px] **:leading-[var(--line-height-sm)] **:break-all">
								<p
									dangerouslySetInnerHTML={{
										__html,
									}}
								/>
							</div>
						</>
					}
				/>
			)}
		</>
	);
}
