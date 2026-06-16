import React from 'react';
import Child from './Child';

const mockdata = {
  name: 'Prakash',
  mob: '1235456'
};

const Parent = () => {
  return (
    <div>
      <Child data={mockdata} />
    </div>
  );
};

export default Parent;