import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Header } from "./components/landing/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Matric Maths Tutoring | Live Online Classes | Pass Matric Maths",
  description: "Live online matric maths classes with real teachers. Small groups of 25 students max. From R1,299/month. Join 500+ students preparing to pass matric maths.",
  keywords: "matric maths, matric maths tutoring, online maths classes south africa, pass matric maths, maths tutoring johannesburg, maths tutoring cape town, matric maths help, grade 12 maths classes",
  openGraph: {
    title: "Matric Maths Tutoring | Live Online Classes",
    description: "From Struggling to Confident. Live matric maths classes that actually work. Small classes, real teachers, results you can see.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
