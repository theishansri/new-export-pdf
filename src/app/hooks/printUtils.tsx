import React from "react";
import { createRoot } from "react-dom/client";
import PrintContent from "../components/PrintContent"; // Adjust the path as needed

export const handlePrint = (option: "currentPage" | "wholeReport") => {
  if (option === "currentPage") {
    // Use window.print() to print the current page
    window.print();
    return;
  }

  try {
    // Open a new tab for the whole report
    const printWindow = window.open("", "_blank", "width=800,height=600");

    if (!printWindow) {
      console.error(
        "Failed to open print window. Please check your browser settings."
      );
      return;
    }

    // Create a container for React content
    const container = printWindow.document.createElement("div");
    printWindow.document.body.appendChild(container);

    // Add styles for the print content
    const style = printWindow.document.createElement("style");
    style.textContent = `
      body {
        font-family: Arial, sans-serif;
        margin: 20px;
      }
    `;
    printWindow.document.head.appendChild(style);

    // Render the React component into the new window
    const root = createRoot(container);
    root.render(<PrintContent />); // Render the whole report content

    // Trigger the print dialog after a short delay
    setTimeout(() => {
      printWindow.focus();
      printWindow.print();

      // Ensure the new tab is closed after the print dialog is dismissed
      const closeWindow = () => {
        root.unmount();
        printWindow.close();
      };

      if (typeof printWindow.onafterprint !== "undefined") {
        printWindow.onafterprint = closeWindow;
      } else {
        setTimeout(closeWindow, 500);
      }
    }, 1000);
  } catch (error) {
    console.error("An error occurred while handling print:", error);
  }
};
