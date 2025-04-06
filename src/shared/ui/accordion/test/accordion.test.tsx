import { render, screen, renderHook, cleanup } from '@testing-library/react';
import { describe, it, expect, afterEach } from 'vitest';

import { Accordion } from '../ui/accordion';
import { AccordionTrigger } from '../ui/accordion-trigger';
import { AccordionContent } from '../ui/accordion-content';
import { useAccordionContext } from '../ui/accordion';
import userEvent from '@testing-library/user-event';

type AccordionItem = {
	title: string;
	content: string;
	value: string;
};

const AccordionTest = ({ items }: { items: AccordionItem[] }) => {
	return (
		<Accordion>
			{items.map((item) => (
				<div key={item.value} data-testid={`accordion-item-${item.value}`}>
					<AccordionTrigger value={item.value}>{item.title}</AccordionTrigger>
					<AccordionContent value={item.value}>{item.content}</AccordionContent>
				</div>
			))}
		</Accordion>
	);
};

describe('Accordion', () => {
	describe('useAccordionContext', () => {
		it('1. useAccordionContext는 Provider 없이 사용할 수 없다', () => {
			try {
				renderHook(() => useAccordionContext());
			} catch (err) {
				expect(err).toEqual(new Error('Accordion 컴포넌트를 감싸주세요.'));
			}
		});

		it('2. useAccordionContext는 Provider 안에서 사용할 수 있다', () => {
			const ContextTest = () => {
				const { expandedValue } = useAccordionContext();
				return <div data-testid="accordion-test">{expandedValue}</div>;
			};
			render(
				<Accordion>
					<ContextTest />
				</Accordion>,
			);
			expect(screen.getByTestId('accordion-test').textContent).toBe('');
		});
	});

	describe('Accordion 컴포넌트', () => {
		const items = [
			{ title: '제목1', content: '내용1', value: 'item1' },
			{ title: '제목2', content: '내용2', value: 'item2' },
		];

		afterEach(() => {
			cleanup();
		});

		it('1. Accordion 아이템들이 올바르게 렌더링된다', () => {
			render(<AccordionTest items={items} />);
			const item1 = screen.getAllByText('제목1');
			const item2 = screen.getAllByText('제목2');

			expect(item1.length).toBe(1);
			expect(item2.length).toBe(1);
		});

		it('2. Accordion 트리거를 누를때마다 expanded가 변한다.', async () => {
			render(<AccordionTest items={items} />);
			const trigger = screen.getAllByRole('button')[0];
			// #1. 초기값
			expect(trigger.getAttribute('aria-expanded')).toBe('false');
			// #2. 클릭 1 -> true
			await userEvent.click(trigger);
			expect(trigger.getAttribute('aria-expanded')).toBe('true');
			// #3. 클릭 2 -> false
			await userEvent.click(trigger);
			expect(trigger.getAttribute('aria-expanded')).toBe('false');
		});
	});
});
