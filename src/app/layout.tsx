import type { Metadata } from "next";
import "./global-icons.scss";
import "./globals.scss";
import "./prose.scss";
import Header from "@/components/Header";
import { ThemeProvider } from "./providers";
import { Inter, Crimson_Text, Nunito } from "next/font/google";
 
// Fonts
const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const crimson_text = Crimson_Text({ subsets: ["latin"], weight: "600", variable: '--font-crimson-text'});
const nunito = Nunito({ subsets: ["latin"], weight: "400", variable: '--font-nunito'});
const nunito_light = Nunito({ subsets: ["latin"], weight: "300", variable: '--font-nunito-light'});

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
    <html lang="en" className={`${inter.variable} ${crimson_text.variable} ${nunito.variable} ${nunito_light.variable}`}>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
