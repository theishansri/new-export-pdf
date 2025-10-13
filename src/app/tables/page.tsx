import React from "react";

const SampleTable: React.FC = () => {
  return (
    <div style={{ padding: "20px" }} className="table-container">
      <h1>Sample Table</h1>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Name</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Age</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              John Doe
            </td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>28</td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              New York
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              Jane Smith
            </td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>34</td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              Los Angeles
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              Alice Johnson
            </td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>29</td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              Chicago
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SampleTable;
