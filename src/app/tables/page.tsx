import React from "react";

const SampleTable: React.FC = () => {
  const rows = [
    { name: "John Doe", age: 28, city: "New York" },
    { name: "Jane Smith", age: 34, city: "Los Angeles" },
    { name: "Alice Johnson", age: 29, city: "Chicago" },
    { name: "Michael Brown", age: 40, city: "Houston" },
    { name: "Emily Davis", age: 25, city: "Phoenix" },
    { name: "Chris Wilson", age: 32, city: "Philadelphia" },
    { name: "Sarah Taylor", age: 30, city: "San Antonio" },
    { name: "David Moore", age: 27, city: "San Diego" },
    { name: "Sophia White", age: 35, city: "Dallas" },
    { name: "James Hall", age: 31, city: "San Jose" },
    { name: "Olivia Clark", age: 26, city: "Austin" },
    { name: "Daniel Lewis", age: 33, city: "Jacksonville" },
    { name: "Isabella Walker", age: 29, city: "Fort Worth" },
    { name: "Matthew Allen", age: 36, city: "Columbus" },
    { name: "Mia Young", age: 24, city: "Charlotte" },
    { name: "Ethan King", age: 37, city: "San Francisco" },
    { name: "Ava Wright", age: 28, city: "Indianapolis" },
    { name: "Noah Scott", age: 34, city: "Seattle" },
    { name: "Liam Green", age: 30, city: "Denver" },
    { name: "Emma Adams", age: 27, city: "Washington" },
  ];

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
          {rows.map((row, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {row.name}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {row.age}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {row.city}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SampleTable;
