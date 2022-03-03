import React from "react";

const Table = ({ csv }) => {
  if (!csv) {
    return null;
  }
  return (
    <table>
      <thead>
        <tr></tr>
      </thead>
      <tbody></tbody>
    </table>
  );
};
