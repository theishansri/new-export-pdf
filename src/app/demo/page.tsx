"use client";
import React, { useMemo, useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line, Pie, Doughnut, Radar, PolarArea } from "react-chartjs-2";
import { chartsPayload } from "./chartsPayload";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend
);

const DemoPage = () => {
  const chartRefs = useRef<(HTMLDivElement | null)[]>([]); // To store references to the chart canvases
  const [loading, setLoading] = React.useState(false);
  // Function to generate rows dynamically
  const generateRows = (n: number) => {
    return useMemo(() => {
      return Array.from({ length: n }, (_, i) => ({
        name: `Name ${i + 1}`,
        age: 20 + (i % 10),
        city: `City ${i + 1}`,
      }));
    }, [n]);
  };

  // Sample data for charts
  const chartData = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "Sample Data",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Generate 50,000 rows for the table
  const rows = generateRows(50000 * 2);

  // Function to download the PDF
  const downloadPDF = async () => {
    setLoading(true);
    try {
      // Capture chart images as base64 strings
      const chartImages = chartRefs.current.map((chartRef) => {
        if (chartRef) {
          const canvas = chartRef.querySelector("canvas");
          return canvas ? canvas.toDataURL("image/png") : null; // Convert canvas to base64 image if not null
        }
        return null;
      });

      const payload = {
        charts: chartsPayload, // Filter out null values
        rows, // Send only the first 100 rows for demonstration
      };

      fetch("/api/export-pdf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((response) => response.blob())
        .then((blob) => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = "demo.pdf";
          a.click();
          window.URL.revokeObjectURL(url);
        });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Demo Page</h1>

      {/* Export PDF Button */}
      <button
        onClick={downloadPDF}
        disabled={loading}
        style={{
          marginBottom: "20px",
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Export PDF
      </button>

      {/* Render 10 Charts */}
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}
      >
        {/* Bar Chart */}
        <div
          ref={(el) => {
            chartRefs.current[0] = el;
          }}
          style={{ width: "100%", height: "300px" }}
        >
          <Bar data={chartData} />
        </div>

        {/* Line Chart */}
        <div
          ref={(el) => {
            chartRefs.current[1] = el;
          }}
          style={{ width: "100%", height: "300px" }}
        >
          <Line data={chartData} />
        </div>

        {/* Pie Chart */}
        <div
          ref={(el) => {
            chartRefs.current[2] = el;
          }}
          style={{ width: "100%", height: "300px" }}
        >
          <Pie data={chartData} />
        </div>

        {/* Doughnut Chart */}
        <div
          ref={(el) => {
            chartRefs.current[3] = el;
          }}
          style={{ width: "100%", height: "300px" }}
        >
          <Doughnut data={chartData} />
        </div>

        {/* Radar Chart */}
        <div
          ref={(el) => {
            chartRefs.current[4] = el;
          }}
          style={{ width: "100%", height: "300px" }}
        >
          <Radar data={chartData} />
        </div>

        {/* Polar Area Chart */}
        <div
          ref={(el) => {
            chartRefs.current[5] = el;
          }}
          style={{ width: "100%", height: "300px" }}
        >
          <PolarArea data={chartData} />
        </div>

        {/* Additional Bar Chart */}
        <div
          ref={(el) => {
            chartRefs.current[6] = el;
          }}
          style={{ width: "100%", height: "300px" }}
        >
          <Bar data={chartData} />
        </div>

        {/* Additional Line Chart */}
        <div
          ref={(el) => {
            chartRefs.current[7] = el;
          }}
          style={{ width: "100%", height: "300px" }}
        >
          <Line data={chartData} />
        </div>

        {/* Additional Pie Chart */}
        <div
          ref={(el) => {
            chartRefs.current[8] = el;
          }}
          style={{ width: "100%", height: "300px" }}
        >
          <Pie data={chartData} />
        </div>

        {/* Additional Doughnut Chart */}
        <div
          ref={(el) => {
            chartRefs.current[9] = el;
          }}
          style={{ width: "100%", height: "300px" }}
        >
          <Doughnut data={chartData} />
        </div>
      </div>

      {/* Render Table */}
      <div style={{ marginTop: "40px" }}>
        <h2>Table with 50,000 Rows</h2>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Name</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Age</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>City</th>
            </tr>
          </thead>
          <tbody>
            {rows.slice(0, 100).map((row, index) => (
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
    </div>
  );
};

export default DemoPage;
