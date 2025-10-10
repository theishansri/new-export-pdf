"use client";

import PrintContent from "./components/PrintContent";

export default function Home() {
  const handlePrint = async () => {
    const printWindow = window.open("", "_blank", "width=800,height=600");

    if (printWindow) {
      const container = printWindow.document.createElement("div");
      printWindow.document.body.appendChild(container);

      const style = printWindow.document.createElement("style");
      style.textContent = `
        body {
          font-family: Arial, sans-serif;
          margin: 20px;
        }
        h2 {
          text-align: center;
        }
          @page {
          size: auto;
          margin: 0;
        }
          @print {
    @page :footer {
        display: none
    }

    @page :header {
        display: none
    }
}
        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }
        table, th, td {
          border: 1px solid black;
        }
        th, td {
          padding: 8px;
          text-align: left;
        }
      `;
      printWindow.document.head.appendChild(style);

      // ✅ Dynamically import react-dom/client (works correctly in Next.js)
      const { createRoot } = await import("react-dom/client");
      const root = createRoot(container);
      root.render(<PrintContent />);
      printWindow.onafterprint = () => {
        printWindow.close();
      };

      // Optional: Auto print after rendering
      setTimeout(() => {
        printWindow.print();
      }, 500);
    }
  };

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen sm:p-20">
      I am home
      <button
        onClick={handlePrint}
        className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600 transition"
      >
        Print Pdf
      </button>
    </div>
  );
}
