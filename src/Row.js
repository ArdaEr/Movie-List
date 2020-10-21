import React from 'react';
import './Row.css';


function Row({ item }) {
  return (
    <tr className="row-item">
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.price}</td>
    </tr>
  );
}

export default Row;