import React from "react";
import TableComponent from "../tables/page";
import ChartComponent from "@/app/charts/page";
import GraphPage from "../graph/page";

const PrintContent: React.FC = () => {
  return (
    <div>
      <h1>Print Content</h1>
      <div>
        <h2>Table</h2>
        <TableComponent />
      </div>
      <div>
        <h2>Chart</h2>
        <ChartComponent />
      </div>
      <div>
        <h2>Line Chart</h2>
        <GraphPage />
      </div>
    </div>
  );
};

export default PrintContent;
