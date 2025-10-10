"use client";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { handlePrint } from "./hooks/printUtils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 min-h-screen`}
      >
        {/* Navbar */}
        <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md sticky top-0 z-50">
          {/* Left: App Title */}
          <div className="text-lg font-semibold text-gray-800">
            Export PDF App
          </div>

          {/* Center: Navigation Links */}
          <div className="flex items-center space-x-6 text-gray-700">
            <Link href="/tables" className="hover:text-blue-600 transition">
              Table
            </Link>
            <Link href="/charts" className="hover:text-blue-600 transition">
              Charts
            </Link>
            <Link href="/graph" className="hover:text-blue-600 transition">
              Graphs
            </Link>
          </div>

          {/* Right: Generate PDF Button */}
          <div>
            <button
              onClick={handlePrint}
              className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-md transition"
            >
              Generate PDF
            </button>
          </div>
        </nav>

        {/* Main Page Content */}
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
