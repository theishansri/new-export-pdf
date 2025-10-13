import React from "react";
import TableComponent from "../tables/page";
import ChartComponent from "@/app/charts/page";
import GraphPage from "../graph/page";
import Details from "./Details";

const PrintContent: React.FC = () => {
  return (
    <>
      <style>
        {`
          @media print {
            @page {
              margin: 0; /* Removes the default margins, including header and footer */
            }

            body {
              margin: 1cm; /* Add custom margins for the printed content */
            }

            .print-content {
              font-family: Arial, sans-serif;
              color: #000;
              background: #fff;
              padding: 1cm;
            }

            .print-hidden {
              display: none !important;
            }
              .mt-300{
              margin-top:300px !important;
              }
          }
        `}
      </style>
      <div className="print-content">
        <h1 className="text-2xl font-bold mb-4">Print Content</h1>
        <Details />
        <div className="mb-6 mt-300">
          <h2 className="text-xl font-semibold mb-2">Table</h2>
          <TableComponent />
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Chart</h2>
          <ChartComponent />
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Line Chart</h2>
          <GraphPage />
        </div>
      </div>
    </>
  );
};

export default PrintContent;
