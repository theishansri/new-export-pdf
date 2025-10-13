"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ExportModal from "./components/ExportModal";
import { handlePrint } from "./hooks/printUtils";

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleExport = (option: "currentPage" | "wholeReport") => {
    setModalOpen(false);
    if (option === "currentPage") {
      setTimeout(() => window.print(), 100);
    } else {
      handlePrint(option);
    }
  };

  return (
    <main className="grid grid-cols-[78%_22%] h-screen">
      {/* Content Area */}
      <div className="p-6 overflow-y-auto">{children}</div>

      {/* Sidebar */}
      <aside className="bg-white shadow-md flex flex-col print:static print:shadow-none print:w-full print:h-auto print-hidden">
        <div className="p-4">
          <div className="text-lg font-semibold text-gray-800 pb-4">
            <Link href={"/"}>Export PDF App</Link>
          </div>
          {pathname === "/" && (
            <Link
              href="/print"
              className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-md transition"
            >
              Go to Print Page
            </Link>
          )}
          {pathname === "/print" && (
            <button
              onClick={() => setModalOpen(true)}
              className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-md transition print-hidden"
            >
              Export PDF
            </button>
          )}
        </div>

        {pathname === "/print" && (
          <nav className="flex flex-col space-y-4 p-4 text-gray-700">
            <Link href="/tables" className="hover:text-blue-600 transition">
              Table
            </Link>
            <Link href="/charts" className="hover:text-blue-600 transition">
              Charts
            </Link>
            <Link href="/graph" className="hover:text-blue-600 transition">
              Graphs
            </Link>
          </nav>
        )}
      </aside>

      {/* Export Modal */}
      <ExportModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleExport}
      />
    </main>
  );
}
