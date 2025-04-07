import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/shared/ui/accordion';

type Props = {
	value: string;
	category: string;
	title: string;
	content: string;
};

export function FaqListItem({ value, category, title, content }: Props) {
	return (
		<AccordionItem value={value}>
			<AccordionTrigger value={value}>
				<div className="flex lg:items-center lg:flex-row flex-col">
					<em className="text-gray-500 px-[var(--faq-list-a-padding-h)] lg:text-center lg:w-[184px] mb-1 lg:mb-0 text-[calc(1em-4px)] leading-[var(--line-height-md)] lg:text-[length:var(--faq-list-a-size)] lg:leading-[var(--line-height-sm)]">
						{category}
					</em>
					<strong className="flex-1 pl-[var(--faq-list-a-padding-h)] text-left">{title}</strong>
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
