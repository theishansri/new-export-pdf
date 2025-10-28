import React from "react";
import TableComponent from "../tables/page";
import ChartComponent from "@/app/charts/page";
import GraphPage from "../graph/page";
import AdGroupDetails from "@/app/ad-group/[id]/page"; // Import the Ad Group Details component
import Shoppers from "@/app/shoppers/page"; // Import the Shoppers component
import Target from "@/app/target/page"; // Import the Target component
import Product from "@/app/product/page"; // Import the Product component
import Recommendations from "@/app/recommendations/page"; // Import the Recommendations component

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
            .mt-300 {
              margin-top: 300px !important;
            }
          }
        `}
      </style>
      <div className="print-content">
        <h1 className="text-2xl font-bold mb-4">Print Content</h1>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Ad Groups</h2>
          {Array.from({ length: 20 }, (_, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-medium">Ad Group {index + 1}</h3>
              <AdGroupDetails /> {/* Pass the Ad Group ID as a prop */}
            </div>
          ))}
        </div>

        {/* Render Shoppers */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Shoppers</h2>
          <Shoppers />
        </div>

        {/* Render Target */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Target</h2>
          <Target />
        </div>

        {/* Render Product */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Product</h2>
          <Product />
        </div>

        {/* Render Recommendations */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Recommendations</h2>
          <Recommendations />
        </div>
      </div>
    </>
  );
};

export default PrintContent;
