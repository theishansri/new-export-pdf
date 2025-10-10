"use client";

import PrintContent from "./components/PrintContent";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col items-center justify-center px-6 py-10 overflow-y-auto">
      <div className="max-w-3xl text-gray-800 space-y-4">
        <h1 className="text-2xl font-bold text-center mb-4">
          Limitations of React PDF Renderer
        </h1>
        <p>
          While React PDF (<code>@react-pdf/renderer</code>) provides a
          React-like API for generating PDFs, it has several drawbacks for
          dynamic, visual, and accessible document generation:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>❌ Limited Chart and Canvas Support:</strong> React PDF does
            not natively support rendering elements that rely on the HTML{" "}
            <code>&lt;canvas&gt;</code> API, such as charts created using
            Chart.js, Recharts, or D3. To include charts, we would need to
            capture them as images (screenshots) using tools like{" "}
            <code>html2canvas</code> or <code>canvas.toDataURL()</code> and then
            embed those images into the PDF — which adds extra complexity and
            reduces rendering quality.
          </li>

          <li>
            <strong>📉 No True HTML or CSS Rendering:</strong> React PDF uses a
            custom layout engine, not the browser’s rendering engine. This means
            advanced CSS features, flex behaviors, and layout precision
            (especially for responsive charts or tables) often differ from what
            users see in the actual web UI.
          </li>

          <li>
            <strong>♿ Lack of Accessibility Support:</strong> React PDF does
            not produce tagged or accessible PDFs. There’s no support for adding
            semantic tags, alternative text, reading order, or ARIA attributes,
            which makes the resulting document inaccessible to screen readers or
            assistive technologies.
          </li>

          <li>
            <strong>📄 Large File Size & Performance Overhead:</strong> Because
            charts and other visuals must be captured as images, the generated
            PDF size grows significantly. Additionally, React PDF re-renders all
            components server-side before generating the file, making it slower
            and heavier, especially for documents with multiple visual
            components.
          </li>
        </ul>
      </div>
    </div>
  );
}
