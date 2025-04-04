export type AddressField = {
	label: string;
	value: string;
	href?: string;
};

type Address = {
	위치: AddressField;
	회사: AddressField;
	대표: AddressField;
	사업자등록번호: AddressField;
	통신판매번호: AddressField;
	고객센터: AddressField;
	제휴문의: AddressField;
};

export const ADDRESS: Address = {
	위치: {
		label: '',
		value: '서울특별시 서초구 헌릉로 12',
	},
	회사: {
		label: '',
		value: '기아㈜',
	},
	대표: {
		label: '대표: ',
		value: '송호성, 최준영',
	},
	사업자등록번호: {
		label: '사업자등록번호: ',
		value: '119-81-02316',
	},
	통신판매번호: {
		label: '통신판매번호: ',
		value: '2006-07935',
	},
	고객센터: {
		label: '고객센터: ',
		value: '1833-4964',
	},
	제휴문의: {
		label: '제휴문의: ',
		value: 'kiabiz@kia.com',
		href: 'mailto:kiabiz@kia.com',
	},
};
