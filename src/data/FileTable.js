import React from "react";

export default function FileTable({ data }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "#fff",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <thead style={{ background: "#007bff", color: "white" }}>
          <tr>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Type</th>
            <th style={thStyle}>Subtype</th>
            <th style={thStyle}>Status</th>
            {/* <th style={thStyle}>Download</th> */}
          </tr>
        </thead>

        <tbody>
          {data?.map((item, index) => (
            <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={tdStyle}>{item.name}</td>
              <td style={tdStyle}>{item.type}</td>
              <td style={tdStyle}>{item.subtype}</td>
              {/* <td style={tdStyle}>{item.status}</td> */}
              <td style={tdStyle}>
                <a
                  href={item.fileUrl}
                  download
                  style={{
                    color: "white",
                    background: "#28a745",
                    padding: "6px 12px",
                    borderRadius: "4px",
                    textDecoration: "none",
                  }}
                >
                  Download
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const thStyle = {
  padding: "12px",
  textAlign: "left",
};

const tdStyle = {
  padding: "10px",
};
