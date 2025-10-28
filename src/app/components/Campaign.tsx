import React from "react";

const Campaign: React.FC = () => {
  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        border: "1px solid #ccc",
        borderRadius: "5px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h1>Campaign details</h1>
        <div>
          <div>Edit ad group</div>
        </div>
      </div>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "15px",
          borderRadius: "5px",
        }}
      >
        <h2 style={{ marginBottom: "10px" }}>Ad Group 1</h2>
        <p>
          This is a sample description for Ad Group 1. It contains details about
          the ad group.
        </p>
      </div>
    </div>
  );
};

export default Campaign;
