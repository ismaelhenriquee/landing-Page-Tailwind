import type { Metadata } from 'next';
import './globals.css';
import { Lato } from 'next/font/google';
import { Header } from '@/componets/Header';


export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app'
};
const lato = Lato({ subsets: ['latin'], weight: ['400', '700'] });

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
            <body className={`${lato.className}`}>
                <Header />
                {children}
            </body>
        </html>
    );
}
