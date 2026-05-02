import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "American Dream — The Most Ambitious Destination",
  description: "North America's premier mixed-use destination for luxury retail, entertainment and events.",
  openGraph: {
    title: "American Dream — The Most Ambitious Destination",
    description: "North America's premier mixed-use destination for luxury retail, entertainment and events.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} ${jetbrains.variable}`} suppressHydrationWarning>
      <body className="antialiased bg-background text-primary">
        {children}
      </body>
    </html>
  );
}
