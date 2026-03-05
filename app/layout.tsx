import type { Metadata } from "next";
import {Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Webverse",
  description: "Smart Leads System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <html lang="id">
  <body className={montserrat.className}>
    {children}
  </body>
</html>
  );
}
