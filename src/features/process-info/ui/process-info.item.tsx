import Image from 'next/image';
import type { ProcessListItem } from '../data/process';

type Props = ProcessListItem & {
	stepArrow?: boolean;
};

export function ProcessInfoItem({ name, description, icon, stepArrow }: Props) {
	return (
		<div className="relative">
			{stepArrow && (
				<div className="absolute top-1/2 -translate-y-1/2 -left-2 lg:block hidden">
					<div className="relative size-6">
						<Image src="/icons/ic_step_arrow.svg" alt={'icon'} fill />
					</div>
				</div>
			)}
			<li className="flex flex-row lg:flex-col lg:gap-2 gap-3 flex-1 lg:pl-6">
				<div className="relative size-[var(--ic-xlg)]">
					<Image src={icon} alt={'icon'} fill />
				</div>
				<div className="flex flex-col gap-1 lg:gap-2">
					<strong className="text-lg font-bold text-primary">{name}</strong>
					<em className="text-gray-700 text-base">{description}</em>
				</div>
			</li>
		</div>
	);
}
