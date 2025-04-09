import { render, screen, renderHook, within, cleanup } from '@testing-library/react';
import { describe, it, expect, afterEach } from 'vitest';

import { RadioGroup, RadioGroupItem } from '..';
import { useRadioGroupContext } from '../ui/radio-group';

type RadioOption = {
	label: string;
	value: string;
};

const RadioGroupTest = ({ defaultValue, options }: { defaultValue: string; options: RadioOption[] }) => {
	return (
		<RadioGroup defaultValue={defaultValue}>
			<div>
				{options.map((option) => (
					<RadioGroupItem key={option.value} value={option.value}>
						{option.label}
					</RadioGroupItem>
				))}
			</div>
		</RadioGroup>
	);
};

describe('RadioGroup', () => {
	describe('useContextValue', () => {
		it('1. useRadioGroupContext는 Provider 없이 사용할 수 없다', () => {
			try {
				renderHook(() => useRadioGroupContext());
			} catch (err) {
				expect(err).toEqual(new Error('RadioGroup 컴포넌트를 감싸주세요.'));
			}
		});

		it('2. useRadioGroupContext는 Provider 안에서 사용할 수 있다', () => {
			const ContextText = () => {
				const { selectedValue } = useRadioGroupContext();
				return <div data-testid="radio-group-test">{selectedValue}</div>;
			};
			render(
				<RadioGroup defaultValue="option1">
					<ContextText />
				</RadioGroup>,
			);
			expect(screen.getByTestId('radio-group-test').textContent).toBe('option1');
		});
	});

	describe('RadioGroup 컴포넌트', () => {
		const options = [
			{ label: '옵션1', value: 'option1' },
			{ label: '옵션2', value: 'option2' },
		];

		afterEach(() => {
			cleanup();
		});

		it('1. Radio 옵션의 텍스트가 올바르게 렌더링된다', () => {
			render(<RadioGroupTest defaultValue="option1" options={options} />);
			const text = within(screen.getByText('옵션1'));
			expect(text).toBeDefined();
		});

		it('2. 기본 선택된 라디오 옵션이 올바르게 렌더링된다', () => {
			render(<RadioGroupTest defaultValue="option1" options={options} />);
			const option = screen.getAllByTestId('radio-option1')[0];
			expect(option).toBeDefined();
		});
	});
});
