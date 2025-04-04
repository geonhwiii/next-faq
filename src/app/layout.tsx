import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { cn } from '@/shared/utils/cn';
import { meta } from '@/shared/constants/meta';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = meta;

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={cn(geistSans.variable, geistMono.variable, 'antialiased')}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
