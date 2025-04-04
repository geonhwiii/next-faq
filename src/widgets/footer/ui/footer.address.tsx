export function FooterAddress() {
	return (
		<address className="text-gray-400 text-xs md:text-sm flex flex-col md:flex-row md:flex-wrap lg:justify-end *:inline-flex lg:text-right *:mr-3 *:lg:mr-0 *:lg:ml-3 gap-1 lg:gap-0">
			<span>
				<span>{'서울특별시 서초구 헌릉로 12'}</span>
				<em className="ml-3">{'기아㈜'}</em>
			</span>
			<span>
				<span>{'대표: '}</span>
				<i>{'송호성, 최준영'}</i>
			</span>
			<span>
				<span>{'사업자등록번호: '}</span>
				<i>{'119-81-02316'}</i>
			</span>
			<span>
				<span>{'통신판매번호: '}</span>
				<i>{'2006-07935'}</i>
			</span>
			<span>
				<span>{'고객센터: '}</span>
				<i>{'1833-4964'}</i>
			</span>
			<span>
				<span>{'제휴문의: '}</span>
				<a href="mailto:kiabiz@kia.com" className="underline">
					{'kiabiz@kia.com'}
				</a>
			</span>
		</address>
	);
}
