import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Great_Vibes } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
});

// Using Great Vibes again because it has superior weight and majesty for big headers
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-cursive",
});

export const metadata: Metadata = {
  title: "Devika & Akhil | Wedding Invitation",
  description: "Join us in celebrating the wedding of Devika and Akhil.",
  openGraph: {
    title: "Devika & Akhil | Wedding Invitation",
    description: "Join us in celebrating the wedding of Devika and Akhil.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable} ${greatVibes.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col selection:bg-gold selection:text-royal-dark">
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
