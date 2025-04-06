'use client';

import ky from 'ky';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export const client = ky.create({
	prefixUrl: `${API_URL}/api`,
	headers: {
		'Content-Type': 'application/json',
	},
});
