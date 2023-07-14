import React, { useState } from 'react';

function ViewDetail({ id, effort, name, description }) {
  const [showDescription, setShowDescription] = useState(false);

  const handleClick = () => {
    setShowDescription(!showDescription);
  };



  return (
    <div className="card">
      <h3>ID: {id}</h3>
      <p>Effort: {effort}</p>
      <p>Name: {name}</p>
      {showDescription && (
            <p>Description: {description}</p>
      )}
      <button onClick={handleClick}>show/hide more details</button>
    </div>
  );
}

export default ViewDetail;
