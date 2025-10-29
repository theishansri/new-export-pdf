import React from "react";
import Details from "@/app/components/Details";

interface AdGroupDetailsProps {
  id: number; // Define the type for the `id` prop
}

const AdGroupDetails: React.FC<AdGroupDetailsProps> = ({ id }) => {
  return (
    <div style={{ padding: "20px" }}>
      <h3>Ad Group {id}</h3>
      <Details />
    </div>
  );
};

export default AdGroupDetails;
