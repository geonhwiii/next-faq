'use client';

import { useEffect, useRef } from 'react';

interface DialogProps {
	isOpen: boolean;
	title: string;
	children: React.ReactNode;

	onClose: () => void;
}

export function Dialog({ isOpen, onClose, title, children }: DialogProps) {
	const dialogRef = useRef<HTMLDialogElement>(null);

	const onKeyDownEscape = (e: React.KeyboardEvent) => {
		if (e.key === 'Escape') onClose();
	};

	useEffect(() => {
		const dialog = dialogRef.current!;
		if (isOpen) {
			dialog.showModal();
			return;
		}
		dialog.close();
	}, [isOpen]);

	return (
		<dialog ref={dialogRef} className="backdrop:bg-black/40 p-0 m-auto" onKeyDown={onKeyDownEscape}>
			<div className="flex flex-col h-full max-w-[960px] w-auto lg:px-8 px-5">
				<div className="flex justify-between items-center border-b-2 border-primary lg:pt-4 pt-1">
					<h4 className="text-primary flex-1 my-[0.4em] mr-[1em] font-bold xl:text-[24px] lg:text-[20px] text-[16px]">
						{title}
					</h4>
					<button className="close" onClick={onClose}>
						{'닫기'}
					</button>
				</div>
				<div className="flex flex-1 flex-col overflow-hidden pt-3 pb-5">{children}</div>
			</div>
		</dialog>
	);
}
