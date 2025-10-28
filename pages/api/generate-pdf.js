import PDFDocument from "pdfkit";

export default function handler(req, res) {
  // Set the response headers to indicate a PDF file
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "inline; filename=example.pdf");

  // Create a new PDF document
  const doc = new PDFDocument();

  // Pipe the PDF document to the response
  doc.pipe(res);

  // Add content to the PDF
  doc.fontSize(20).text("Hello, PDFKit!", { align: "center" });
  doc.moveDown();
  doc.fontSize(14).text("This is a dynamically generated PDF using PDFKit.");
  doc.moveDown();
  doc.text("You can add text, images, tables, and more!");

  // Finalize the PDF and end the stream
  doc.end();
}
