import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { QuoteProvider } from "@/components/quote-modal";
import { DriverApplyProvider } from "@/components/driver-apply-modal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PKT | Asset-Based Truckload Carrier",
  description:
    "Asset-based truckload capacity from PKT, serving the contiguous US. Loads move under our authority, insurance and dispatch.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <QuoteProvider>
          <DriverApplyProvider>{children}</DriverApplyProvider>
        </QuoteProvider>
      </body>
    </html>
  );
}
