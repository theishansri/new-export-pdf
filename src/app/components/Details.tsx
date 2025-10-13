import React from "react";
import ChartPage from "../charts/page";
import SampleTable from "../tables/page";

const Details: React.FC = () => {
  return (
    <div style={{ padding: "24px" }}>
      <h3>Details Page</h3>
      <div className="mt-[12px] px-8 py-3.5">
        This is the details page. You can add any content here that you want to
        include in the PDF.
      </div>
      <div className="mt-[32px] mb-[32px]">
        <ChartPage />
      </div>
      <div className="mt-[32px] mb-[32px]">
        <SampleTable />
      </div>
    </div>
  );
};

export default Details;
