export type ProcessListItem = (typeof processList)[number];

export const processList = [
	{
		id: 1,
		name: '1. 문의 등록',
		description: '상담 문의를 등록해 주시면, 담당자가 맞춤형 상담을 제공합니다.',
		icon: '/icons/ic_process01.svg',
	},
	{
		id: 2,
		name: '2. 관리자 작성',
		description: '관리자 Web 접속 후 결제방식 및 회사정보를 설정합니다.',
		icon: '/icons/ic_process02.svg',
	},
	{
		id: 3,
		name: '3. 임직원 가입',
		description: '이용자 App에서 회원가입 후 소속 회사 인증을 진행합니다.',
		icon: '/icons/ic_process03.svg',
	},
	{
		id: 4,
		name: '4. 서비스 이용',
		description: '이용자 App에서 차량 예약을 하고 K존에서 바로 이용하세요!',
		icon: '/icons/ic_process04.svg',
	},
];
