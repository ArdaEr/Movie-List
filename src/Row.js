import React from 'react';
import './Row.css';


function Row({ movie }) {
  return (
    <tr className="row-item">
      <td>{movie.title}</td>
    </tr>
  );
}

export default Row;
