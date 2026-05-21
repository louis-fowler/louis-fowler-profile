import type { Metadata } from "next";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Louis Fowler — Front-End Developer",
  description:
    "Louis Fowler — Senior Front-End Developer & People Lead. Auckland, NZ.",
};

const themeInitScript = `(function(){var s=localStorage.getItem('lf-theme');var d=window.matchMedia('(prefers-color-scheme:dark)').matches;document.documentElement.setAttribute('data-theme',s||(d?'dark':'light'));})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html
        lang="en"
        className={`${interTight.variable} ${jetbrainsMono.variable}`}
        suppressHydrationWarning
      >
        <body>
          <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
