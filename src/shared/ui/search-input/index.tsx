'use client';

import { SearchInputClear, SearchInputSubmit } from './ui';
import { Input, type InputProps } from '../input';

type Props = InputProps & {
	showClear?: boolean;
	showSubmit?: boolean;
	onClear?: () => void;
	onSubmit?: () => void;
};

export function SearchInput({
	type,
	placeholder = '찾으시는 내용을 입력해 주세요',
	showClear = false,
	showSubmit = true,
	onClear,
	onSubmit,
	...props
}: Props) {
	return (
		<div className="bg-[var(--gray-10)] flex justify-center mb-4 md:p-4">
			<div className="relative w-[var(--search-bar-width)]" style={{ '--clear-space': '16px' } as React.CSSProperties}>
				<Input type={type} placeholder={placeholder} {...props} />
				{showClear && <SearchInputClear onClick={onClear} />}
				{showSubmit && <SearchInputSubmit />}
			</div>
		</div>
	);
}
