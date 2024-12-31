import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Epilogue } from 'next/font/google'; // Correct import for Epilogue font

const epilogue = Epilogue({ subsets: ['latin'] });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Projeto",
  description: "Projeto criado para teste",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${epilogue.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
