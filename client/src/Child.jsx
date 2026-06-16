import React from 'react';

const Child = ({ data }) => {
  return (
    <div>
      <h2>Hello {data.name}</h2>
      <p>Call me at {data.mob}</p>
    </div>
  );
};

export default Child;