import type { Metadata } from "next";
import { Bebas_Neue, Inter_Tight } from "next/font/google";

import "../styles/globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-bebasNeue",
});
const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebasNeue",
});

export const metadata: Metadata = {
  title: "Dra Antonieta Ortega",
  description: "Cirujano Dentista",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interTight.className} ${bebasNeue.className}`}>
        {children}
      </body>
    </html>
  );
}
