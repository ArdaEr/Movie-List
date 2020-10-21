import React from 'react';
import './ListRow.css';

function ListRow({ howCaniList }) {
  return (
    <tr className="howcaniList-item">
      <td colSpan={3}>{howCaniList}</td>
    </tr>
  );
}

export default ListRow;
