import { render, screen, renderHook, within } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import userEvent from '@testing-library/user-event';

import { Tabs as TabsRoot, useTabsContext } from '../ui/tabs';
import { Tabs } from '../index';

describe('Tabs', () => {
	describe('useContextValue', () => {
		it('1. useTabsContext는 Provider 없이 사용할 수 없다', () => {
			try {
				renderHook(() => useTabsContext());
			} catch (err) {
				expect(err).toEqual(new Error('Tabs 컴포넌트를 감싸주세요.'));
			}
		});
		it('2. useTabsContext는 Provider 안에서 사용할 수 있다', () => {
			const ContextText = () => {
				const { selectedTab } = useTabsContext();
				return <div data-testid="test">{selectedTab}</div>;
			};
			render(
				<TabsRoot defaultValue="tab1">
					<ContextText />
				</TabsRoot>,
			);
			expect(screen.getByTestId('test').textContent).toBe('tab1');
		});
	});

	describe('Tabs 컴포넌트', () => {
		beforeEach(() => {
			render(
				<Tabs
					defaultValue="tab1"
					tabs={[
						{
							label: '탭1',
							value: 'tab1',
							content: <div>내용1</div>,
						},
						{
							label: '탭2',
							value: 'tab2',
							content: <div>내용2</div>,
						},
					]}
				/>,
			);
		});
		it('1. Tab의 텍스트를 올바르게 렌더링된다.', () => {
			const text = within(screen.getByText('탭1'));
			expect(text).toBeDefined();
		});
		it('2. 활성화된 탭의 내용을 올바르게 렌더링된다.', () => {
			const content = screen.getAllByText('내용1')[0];
			expect(content).toBeDefined();
		});
		it('3. 탭 클릭 시 활성화된 탭의 내용이 올바르게 렌더링된다.', async () => {
			const user = userEvent.setup();
			const tab2 = screen.getAllByRole('button', { name: '탭2' })[0];
			await user.click(tab2);
			const content = screen.getAllByText('내용2')[0];
			expect(content).toBeDefined();
		});
	});
});
