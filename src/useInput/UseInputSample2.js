import React from 'react';
import useInput from './useInput';


function UseInputSample2() {
  const input = useInput();


  return (
    <div>
      <h4>UseInput Sample2</h4>
      <input { ...input} />
      <p>{input.value}</p>
      <hr />
    </div>
  );
}

export default UseInputSample2;
