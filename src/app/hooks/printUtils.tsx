import React from "react";
import { createRoot } from "react-dom/client";
import PrintContent from "../components/PrintContent"; // Adjust the path as needed

export const handlePrint = () => {
  try {
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
      h2 {
        text-align: center;
      }
      @page {
        size: auto;
        margin: 0;
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

    // Render the React component into the new window
    const root = createRoot(container);
    root.render(<PrintContent />);

    // Trigger the print dialog after a short delay
    setTimeout(() => {
      printWindow.focus(); // Ensure the new window is focused
      printWindow.print(); // Trigger the print dialog

      // Ensure the new tab is closed after the print dialog is dismissed
      const closeWindow = () => {
        console.log("Closing print window...");
        root.unmount(); // Clean up React root
        printWindow.close(); // Close the print window
      };

      // Use onafterprint if supported
      if (typeof printWindow.onafterprint !== "undefined") {
        printWindow.onafterprint = closeWindow;
      } else {
        // Fallback: Close the window after a delay
        setTimeout(closeWindow, 500);
      }
    }, 200); // Adjust the delay as needed
  } catch (error) {
    console.error("An error occurred while handling print:", error);
  }
};
