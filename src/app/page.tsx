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
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>@react-pdf/renderer (React PDF)</strong>
          </li>
          <li>
            <strong>Print Manager (browser-based window.print())</strong>
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">
          Limitations of React PDF Renderer
        </h2>
        <p>
          While React PDF (<code>@react-pdf/renderer</code>) offers a React-like
          API for generating PDFs, it has several drawbacks for dynamic, visual,
          and accessible documents:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>❌ Limited chart/canvas support:</strong> It doesn’t
            natively render elements that use the HTML{" "}
            <code>&lt;canvas&gt;</code> API (e.g., Chart.js, Recharts, D3). To
            include charts, you must capture them as images (e.g., via{" "}
            <code>html2canvas</code> or <code>canvas.toDataURL()</code>), which
            adds complexity and can reduce quality.
          </li>
          <li>
            <strong>📉 No true HTML/CSS rendering:</strong> It uses its own
            layout engine rather than the browser’s. Advanced CSS, flex
            behavior, and precise layouts—especially for responsive
            charts/tables—often won’t match the live web UI.
          </li>
          <li>
            <strong>♿ Lack of accessibility:</strong> It does not produce
            tagged/accessible PDFs. There’s no built-in support for semantic
            tags, alt text, reading order, or ARIA, limiting screen-reader
            compatibility.
          </li>
          <li>
            <strong>📄 Larger files & performance overhead:</strong> Because
            visuals are embedded as images, file sizes increase. Rendering all
            components before PDF generation can be slow for documents with many
            visuals.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">
          Print Manager (Browser Print) – Summary
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>How it works:</strong> Uses the built-in browser print
            function (<code>window.print()</code>), so no external library is
            required.
          </li>
          <li>
            <strong>Accessibility:</strong> Preserves basic accessibility if the
            source document is already accessible (semantic HTML, proper
            headings/alt text, logical reading order).
          </li>
          <li>
            <strong>Performance caveat:</strong> Printing heavy or complex pages
            can be sluggish and may appear to hang. Use print-optimized styles (
            <code>@media print</code>) to hide non-essential UI and simplify
            layouts where possible.
          </li>
        </ul>

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
