import { PDFDocument as PDFLibDocument } from "pdf-lib";

async function mergePDFs(reactPdfBuffer, pdfkitBuffer) {
  if (!reactPdfBuffer || reactPdfBuffer.byteLength === 0) {
    throw new Error("React PDF buffer is empty or invalid.");
  }

  if (!pdfkitBuffer || pdfkitBuffer.byteLength === 0) {
    throw new Error("PDFKit buffer is empty or invalid.");
  }

  // Load PDFs
  const reactPdf = await PDFLibDocument.load(reactPdfBuffer);
  const pdfkit = await PDFLibDocument.load(pdfkitBuffer);

  // Create final merged PDF
  const mergedPdf = await PDFLibDocument.create();

  // Copy all pages from React PDF
  const reactPages = await mergedPdf.copyPages(
    reactPdf,
    reactPdf.getPageIndices()
  );
  reactPages.forEach((p) => mergedPdf.addPage(p));

  // Take the last page of React PDF
  const lastPage = mergedPdf.getPage(mergedPdf.getPageCount() - 1);
  const { height: pageHeight } = lastPage.getSize();

  // Copy first page of PDFKit output
  const pdfkitPages = await mergedPdf.copyPages(
    pdfkit,
    pdfkit.getPageIndices()
  );

  // 👇 Custom position logic
  // For example, if React content ends at 1.5 pages, start at 0.5 page height.
  // You can make this dynamic if you can estimate React content height.
  const yOffset = pageHeight / 2; // Start halfway down last page
  lastPage.drawPage(pdfkitPages[0], { x: 0, y: yOffset });

  // Add remaining PDFKit pages normally
  for (let i = 1; i < pdfkitPages.length; i++) {
    mergedPdf.addPage(pdfkitPages[i]);
  }

  // Return merged bytes
  return await mergedPdf.save();
}
