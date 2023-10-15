import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const DataTable = ({ data, columns, heading }) => {
  const [sortColumn, setSortColumn] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const sortedData = [...data];
  if (sortColumn) {
    sortedData.sort((a, b) => a[sortColumn] - b[sortColumn]);
  }

  const filteredData = sortedData.filter((item) =>
    Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="w-full h-full bg-white rounded-lg p-4">
      <div className="w-full flex items-center justify-between">
        <p className="text-xl font-semibold">{heading}</p>
        <div className="flex items-center justify-start gap-3">
          <div className="bg-off-white min-w-[150px] w-auto p-2 h-3/5 flex items-center justify-start gap-2 rounded-md">
            <FiSearch className="text-xl" />
            <input
              className="outline-none bg-transparent"
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select className="bg-off-white h-3/5 p-2 rounded-md outline-none">
            <option>Last 30 days</option>
            <option>Last 20 days</option>
            <option>Last 10 days</option>
            <option>Last 5 days</option>
          </select>
        </div>
      </div>
      <table className="w-full mt-4">
        <thead>
          <tr>
            {columns.map((col) => {
              return (
                <th
                  key={col}
                  onClick={() => setSortColumn(col)}
                  className={sortColumn === col ? "sorted" : ""}
                >
                  {col}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, index) => {
            return (
              <tr key={index}>
                {columns.map((col) => {
                  return <td key={col}>{row[col]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
