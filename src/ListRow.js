import React from 'react';
import './ListRow.css';

function ListRow({ description }) {
  return (
    <tr className="howcaniList-item">
      <td colSpan={2}>{description}</td>
    </tr>
  );
}

export default ListRow;
