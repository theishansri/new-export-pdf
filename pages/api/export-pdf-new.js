import { ChartJSNodeCanvas } from "chartjs-node-canvas";
import axios from "axios";

const width = 600;
const height = 400;
const chartJSNodeCanvas = new ChartJSNodeCanvas({ width, height });

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "50mb",
    },
  },
};

export default async function handler(req, res) {
  const { rows, charts } = req.body;

  // Generate chart images
  const chartImages = await Promise.all(
    charts.map(async (chart) => {
      const buffer = await chartJSNodeCanvas.renderToBuffer(chart);
      return `data:image/png;base64,${buffer.toString("base64")}`;
    })
  );

  // Build HTML template for WeasyPrint
  const html = `
  <html>
    <head>
      <meta charset="UTF-8">
      <style>
        body { font-family: Arial, sans-serif; margin: 40px; }
        h1 { color: #1A1A1A; }
        .charts {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: flex-start;
        }
        .charts img {
          width: 45%;
          height: auto;
        }
        table {
          border-collapse: collapse;
          width: 100%;
          font-size: 12px;
          margin-top: 40px;
        }
        th, td {
          border: 1px solid #ccc;
          padding: 6px;
          text-align: left;
        }
        th { background: #E0E0E0; }
        @page {
          size: A4;
          margin: 1in;
          @bottom-center {
            content: "Page " counter(page) " of " counter(pages);
            font-size: 10px;
            color: #777;
          }
        }
      </style>
    </head>
    <body>
      <h1>My Report</h1>
      <div class="charts">
        ${chartImages.map((img) => `<img src="${img}" />`).join("")}
      </div>

      <h2>Data Table</h2>
      <table>
        <thead>
          <tr><th>Name</th><th>Age</th><th>City</th></tr>
        </thead>
        <tbody>
          ${rows
            .slice(0, 10000)
            .map(
              (r) =>
                `<tr><td>${r.name}</td><td>${r.age}</td><td>${r.city}</td></tr>`
            )
            .join("")}
        </tbody>
      </table>
    </body>
  </html>`;
  // Send to Python WeasyPrint service
  try {
    const pdfResponse = await axios.post(
      "http://127.0.0.1:5002/html-to-pdf",
      { html },
      {
        responseType: "arraybuffer",
      }
    );
    console.log("PDF Response:", pdfResponse.status, pdfResponse.headers);

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=report.pdf");
    res.send(Buffer.from(pdfResponse.data));
  } catch (error) {
    console.error("Error in axios.post:", error.message);
    if (error.response) {
      console.error("Response status:", error.response.status);
      console.error("Response data:", error.response.data.toString());
    }
    res.status(500).send("Failed to generate PDF");
  }
}
