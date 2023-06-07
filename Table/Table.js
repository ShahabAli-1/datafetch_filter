import React from "react";
import "./Table.css";
const Table = ({ details }) => {
  return (
    <div className="dataTable">
      <h1>DATA TABLE</h1>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {details.map((item) => (
            <tr key={item.id}>
              <td className="tableEnteries">{item.userId}</td>
              <td className="tableEnteries">{item.id}</td>
              <td className="tableEnteries">{item.title}</td>
              <td className="tableEnteries">{item.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
