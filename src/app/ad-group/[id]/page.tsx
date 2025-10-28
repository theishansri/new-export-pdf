"use client";

import React from "react";
import { useParams } from "next/navigation";
import AdGroupDetails from "../components/AdGroupDetails";

const AdGroup: React.FC = () => {
  const params = useParams(); // Extract dynamic parameters from the URL
  const id = parseInt(params?.id as string, 10); // Convert the `id` parameter to a number

  return <AdGroupDetails id={id} />; // Pass the `id` as a prop to AdGroupDetails
};

export default AdGroup;
