"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Hook to get the current route
import { useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ExportModal from "./components/ExportModal";
import { handlePrint } from "./hooks/printUtils";
import ClientLayoutWrapper from "./ClientLayoutWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
