"use client";

import PrintContent from "./components/PrintContent";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col items-center justify-center px-6 py-10 overflow-y-auto">
      <div className="max-w-3xl text-gray-800 space-y-4">
        <h1 className="text-2xl font-bold text-center mb-4">
          PDF Generation Evaluation
        </h1>
        <p>We evaluated two approaches already available in Classic Sphere:</p>
        <table className="table-auto border-collapse border border-gray-300 w-full text-left text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Feature</th>
              <th className="border border-gray-300 px-4 py-2">React PDF</th>
              <th className="border border-gray-300 px-4 py-2">
                Print Manager
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Chart/Canvas Support
              </td>
              <td className="border border-gray-300 px-4 py-2">
                ❌ Limited support. Requires converting charts to images.
              </td>
              <td className="border border-gray-300 px-4 py-2">
                ✅ Fully supported. Uses native browser rendering.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                HTML/CSS Rendering
              </td>
              <td className="border border-gray-300 px-4 py-2">
                📉 Custom layout engine. Limited CSS support.
              </td>
              <td className="border border-gray-300 px-4 py-2">
                ✅ Easier to customize HTML and CSS. Allows creating a custom
                DOM using browser's native rendering engine.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Accessibility
              </td>
              <td className="border border-gray-300 px-4 py-2">
                ♿ No built-in support for semantic tags or ARIA.
              </td>
              <td className="border border-gray-300 px-4 py-2">
                ✅ Preserves basic accessibility if the source document is
                accessible.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Library Size</td>
              <td className="border border-gray-300 px-4 py-2">
                📄 React PDF: Minified size ~1.2 MB, Gzipped size ~300 KB.
                <br />
                HTML Canvas: Minified size ~150 KB, Gzipped size ~50 KB.
              </td>
              <td className="border border-gray-300 px-4 py-2">
                📄 No additional library required. Uses browser's built-in
                print-to-PDF feature.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Dependencies</td>
              <td className="border border-gray-300 px-4 py-2">
                Requires <code>@react-pdf/renderer</code> and optionally{" "}
                <code>html2canvas</code>.
              </td>
              <td className="border border-gray-300 px-4 py-2">
                No external dependencies. Uses <code>window.print()</code>.
              </td>
            </tr>
          </tbody>
        </table>

        {/* Note below the table */}
        <p className="text-sm text-gray-600 mt-4">
          <strong>Note:</strong> For heavier data (e.g., large tables or many
          charts), the performance of both libraries can be on the slower side.
          Consider optimizing the data or using a server-side solution for
          better performance.
        </p>

        <h2 className="text-xl font-semibold mt-6">Recommendation for MVP</h2>
        <p>
          Given the simplicity (no extra dependency), fidelity to the existing
          UI, and acceptable accessibility passthrough, proceed with Print
          Manager for the MVP—while applying print-optimized styles to reduce
          complexity.
        </p>
        <p>
          For heavier documents (very large tables, many charts, or strict
          accessibility/tagging requirements), plan a server-side PDF option
          (e.g., Puppeteer) as a follow-up.
        </p>
      </div>
    </div>
  );
}
