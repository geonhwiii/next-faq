import { useSuspenseQuery } from '@tanstack/react-query';
import { termsQueryOptions } from '../api';
import { Dialog } from '@/shared/ui/dialog';
import { useState } from 'react';
import { Select } from '@/shared/ui/select';

export function FooterTermsService() {
	const [isOpen, setIsOpen] = useState(false);
	const { data } = useSuspenseQuery(termsQueryOptions({ termsClassId: 'JOIN_SERVICE_USE' }));
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
							<Select
								className="mb-3"
								value={'1726166400000'}
								onChange={() => {}}
								options={[
									{ value: '1726166400000', label: '2024.09.12 ~ 현재' },
									{ value: '1714348800000', label: '2024.04.29 ~ 2024.09.11' },
									{ value: '1700748000000', label: '2023.11.24 ~ 2024.04.28' },
									{ value: '1680451200000', label: '2023.04.03 ~ 2023.11.23' },
									{ value: '1640444400000', label: '2021.12.26 ~ 2023.04.02' },
								]}
							/>
							<div className="**:!text-[12px] **:lg:!text-[14px] **:leading-[var(--line-height-sm)] **:break-all">
								<p
									dangerouslySetInnerHTML={{
										__html: data?.terms[0]?.contents || '',
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
