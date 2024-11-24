import React from 'react';
import './ListGroup.css'; // Correct the import path for the CSS file

function ListGroup() {
  return (
    <ul className="list-group full-screen">
      <li className="list-group-item">An item</li>
      <li className="list-group-item">A second item</li>
      <li className="list-group-item">A third item</li>
      <li className="list-group-item">A fourth item</li>
      <li className="list-group-item">And a fifth one</li>
    </ul>
  );
}

export default ListGroup;
