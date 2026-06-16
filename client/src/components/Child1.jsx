import React from 'react';

const Child1 = (props) => {
  return (
    <div>
      {Object.entries(props).map(([key, value]) => (
        <p key={key}>
          {key}: {value}
        </p>
      ))}
    </div>
  );
};

export default Child1;