import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/shared/utils/cn';
import { meta } from '@/shared/data/meta';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { Main } from '@/widgets/main';
import localFont from 'next/font/local';
import Providers from './providers';

const fonts = localFont({
	src: [
		{
			path: '../../public/fonts/KiaSignatureFixOTFBold.otf',
			weight: '600',
			style: 'normal',
		},
		{
			path: '../../public/fonts/KiaSignatureFixOTFRegular.otf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../public/fonts/KiaSignatureFixOTFLight.otf',
			weight: '300',
			style: 'normal',
		},
	],
});

export const metadata: Metadata = meta;

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={cn(fonts.className, 'antialiased')}>
				<Providers>
					<Header />
					<Main>{children}</Main>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
