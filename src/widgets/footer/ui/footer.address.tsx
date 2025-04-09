import { cn } from '@/shared/utils/cn';
import { type AddressField, ADDRESS } from '../data';

type Props = {
	field: AddressField;
	isCompany?: boolean;
};

export function FooterAddress() {
	return (
		<address
			className={cn(
				'flex flex-col md:flex-row md:flex-wrap lg:justify-end *:inline-flex',
				'*:mr-3 *:lg:mr-0 *:lg:ml-3 gap-1 lg:gap-0',
				'text-xs md:text-sm text-gray-400 lg:text-right',
			)}
		>
			<span>
				<AddressItem field={ADDRESS.위치} />
				<AddressItem field={ADDRESS.회사} isCompany />
			</span>
			<AddressItem field={ADDRESS.대표} />
			<AddressItem field={ADDRESS.사업자등록번호} />
			<AddressItem field={ADDRESS.통신판매번호} />
			<AddressItem field={ADDRESS.고객센터} />
			<AddressItem field={ADDRESS.제휴문의} />
		</address>
	);
}

function AddressItem({ field, isCompany }: Props) {
	const value = field.href ? (
		<a href={field.href} className="underline">
			{field.value}
		</a>
	) : isCompany ? (
		<em className="ml-3">{field.value}</em>
	) : (
		<i>{field.value}</i>
	);
	return (
		<span>
			{field.label && <span>{field.label}</span>}
			{value}
		</span>
	);
}
