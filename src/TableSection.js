import React from "react";

const TableSection = ({ Title, TData }) => {
  console.log(TData, Title, "tdata");
  return (
    <div>
      <div
        style={{
          paddingLeft: "2rem",
        }}
      >
        {Title.split("_").join(" ")}
      </div>

      <div
        style={{
          paddingLeft: "2rem",
        }}
      >
        <table>
          <thead>
            <tr>
              <th>Container</th>
              <th>Processing File</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {TData.map((val, idx) => {
              return (
                <tr key={idx}>
                  <td>{val["Container"]}</td>
                  <td>{val["Processing_File"]}</td>
                  <td>{val["Status"]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableSection;
