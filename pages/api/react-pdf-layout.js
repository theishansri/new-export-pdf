// pages/api/react-pdf-layout.js
import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  pdf,
} from "@react-pdf/renderer";
import fs from "fs";
import path from "path";

const styles = StyleSheet.create({
  page: { paddingHorizontal: 20, paddingVertical: 65, fontFamily: "Helvetica" },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 40,
  },
  title: {
    fontSize: 14,
    color: "#6A7077",
    fontWeight: "bold",
    lineHeight: 1.2,
  },
  subtitle: { fontSize: 24, color: "#1A1A1A" },
  campaign: {
    color: "#000000",
    fontWeight: "500",
    fontSize: 18,
    marginBottom: 20,
  },
  campaignDetails: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

const imagePath = path.join(process.cwd(), "public", "Lines.png");
const base64Image = `data:image/png;base64,${fs
  .readFileSync(imagePath)
  .toString("base64")}`;

const ReportLayout = ({ campaign }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 24,
          }}
        >
          <Image src={base64Image} style={{ width: 60, height: 60 }} />
          <View style={{ display: "grid" }}>
            <Text style={styles.title}>dh Measurement Report</Text>
            <Text style={styles.subtitle}>{campaign.name}</Text>
          </View>
        </View>
        <Text style={styles.subtitle}>
          dunnhumby<Text style={{ color: "#138F8A" }}>media</Text>
        </Text>
      </View>
      <View
        style={{
          borderBottom: "0.5px",
          borderBottomColor: "gray",
          marginHorizontal: "-20px",
        }}
      />
      <View
        style={{
          paddingVertical: 20,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flex: 1, marginRight: 10 }}>
          <Text style={styles.campaign}>Campaign details</Text>
          <View style={styles.campaignDetails}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 14, color: "#6A7077" }}>
                Campaign Id
              </Text>
              <Text style={{ fontSize: 14 }}>123456</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 14, color: "#6A7077" }}>
                Campaign period
              </Text>
              <Text style={{ fontSize: 14 }}>01 Jan 2024</Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={styles.campaign}>Report details</Text>
          <View style={styles.campaignDetails}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 14, color: "#6A7077" }}>
                Campaign Id
              </Text>
              <Text style={{ fontSize: 14 }}>123456</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 14, color: "#6A7077" }}>
                Campaign period
              </Text>
              <Text style={{ fontSize: 14 }}>01 Jan 2024</Text>
            </View>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default async function handler(req, res) {
  if (req.method === "GET") {
    const campaign = { name: "Cadbury Christmas" };
    const instance = pdf(<ReportLayout campaign={campaign} />);
    const buffer = await instance.toBuffer();

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "inline; filename=report.pdf");
    res.send(buffer);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
