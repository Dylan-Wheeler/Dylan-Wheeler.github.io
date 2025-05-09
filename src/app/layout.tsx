import type { Metadata } from "next";
import "./globals.scss";
import "./prose.scss";
// import dynamic from 'next/dynamic'
// const Header = dynamic(() => import('@/components/Header'), { ssr: false })
import Header from "@/components/Header";

import { ThemeProvider } from "./providers";
import { Inter, Crimson_Text, Nunito, Benne, Habibi, Metamorphous, Mea_Culpa } from "next/font/google";
import { Suspense } from "react";
 
// Fonts
const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const crimson_text = Crimson_Text({ subsets: ["latin"], weight: "600", variable: '--font-crimson-text'});
const nunito = Nunito({ subsets: ["latin"], weight: "400", variable: '--font-nunito'});
const nunito_light = Nunito({ subsets: ["latin"], weight: "300", variable: '--font-nunito-light'});
const benne = Benne({ subsets: ["latin"], weight: "400", variable: '--font-benne'});
const habibi = Habibi({ subsets: ["latin"], weight: "400", variable: '--font-habibi'});
const metamorphous = Metamorphous({ subsets: ["latin"], weight: "400", variable: '--font-metamorphous'});
const mea_culpa = Mea_Culpa({ subsets: ["latin"], weight: "400", variable: '--font-mea-culpa'});

export const metadata: Metadata = {
  title: "Dylan Wheeler",
  description: "Dylan Wheeler's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${crimson_text.variable} ${nunito.variable} ${nunito_light.variable} ${benne.variable} ${habibi.variable} ${metamorphous.variable} ${mea_culpa.variable}`}>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange>
          <Suspense>
            <Header />
          </Suspense>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
