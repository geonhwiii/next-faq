import { AccordionContent, AccordionItem, AccordionTrigger } from '@/shared/ui/accordion';
import Image from 'next/image';

type Props = {
	value: string;
	category: string;
	subCategoryName?: string;
	title: string;
	content: string;
};

export function FaqListItem({ value, category, subCategoryName, title, content }: Props) {
	return (
		<AccordionItem value={value}>
			<AccordionTrigger value={value}>
				<div className="flex lg:items-center lg:flex-row flex-col">
					<div className="flex items-center mb-1 lg:mb-0">
						<em className="text-gray-500 lg:px-[var(--faq-list-a-padding-h)] lg:text-center lg:w-[184px] text-[calc(1em-4px)] leading-[var(--line-height-md)] lg:text-[length:var(--faq-list-a-size)] lg:leading-[var(--line-height-sm)]">
							{category}
						</em>
						{subCategoryName && (
							<>
								<div className="relative opacity-30 rotate-270 size-4 mx-1 lg:hidden">
									<Image src={'/icons/ic_arrow.svg'} alt="arrow" fill />
								</div>
								<em className="text-gray-500 lg:px-[var(--faq-list-a-padding-h)] lg:text-center lg:w-[184px] text-[calc(1em-4px)] leading-[var(--line-height-md)] lg:text-[length:var(--faq-list-a-size)] lg:leading-[var(--line-height-sm)]">
									{subCategoryName}
								</em>
							</>
						)}
					</div>
					<strong className="flex-1 lg:pl-[var(--faq-list-a-padding-h)] text-left">{title}</strong>
				</div>
			</AccordionTrigger>
			<AccordionContent value={value}>
				<div
					className="text-base leading-[var(--line-height-lg)] p-[var(--faq-list-q-padding)] border-t border-t-gray-100"
					dangerouslySetInnerHTML={{ __html: content }}
				/>
			</AccordionContent>
		</AccordionItem>
	);
}
