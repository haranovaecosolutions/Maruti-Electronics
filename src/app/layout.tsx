import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { company } from "@/data/site";

export const metadata: Metadata = {
  title: `${company.name} | Government Approved Electrical Contractor`,
  description:
    "Maruti Electricals is a Government Approved Electrical Contractor providing HT, LT, DG, Streetlight, Solar and complete electrical solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}