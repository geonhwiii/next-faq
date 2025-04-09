export type TermsClassId = 'JOIN_SERVICE_USE' | 'STARTADMIN_ADMIN_PRIVACY';

export type TermsParams = {
	termsClassId: TermsClassId;
};

export type TermsItem = {
	termsName: string;
	termsVersion: number;
	startDate: number;
	endDate: number;
	contents: string;
};

export type TermsResponse = {
	terms: TermsItem[];
};
