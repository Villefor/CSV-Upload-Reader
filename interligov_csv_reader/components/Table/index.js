import React from "react";

const Table = ({ csv }) => {
  if (!csv) {
    return null;
  }
  return (
    <table>
      <thead>
        <tr>
          {csv.header.map((item_name, index) => (
            <th key={index}>{item_name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {csv.data.map((row, index) => (
          <tr key={index}>
            {row.map((column) => (
              <td key={column}>{column}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
