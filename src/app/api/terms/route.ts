import type { NextRequest } from 'next/server';
import type { TermsClassId } from '@/types/terms';
import TermsJoinServiceUseData from '@/mocks/data/terms-join-service-use.json';
import TermsStartAdminAdminPrivacyData from '@/mocks/data/terms-startadmin_admin_privacy.json';

export async function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams;
	const termsClassID = searchParams.get('termsClassID') as TermsClassId;

	const data = termsClassID === 'JOIN_SERVICE_USE' ? TermsJoinServiceUseData : TermsStartAdminAdminPrivacyData;

	return Response.json(data);
}
