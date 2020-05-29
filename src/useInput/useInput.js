import React, { useState, useRef, useEffect} from 'react';


function UseInput() {
  const [value, setValue] = useState('');
  const onChange = e => {
    const { target: {value}} = e;
    setValue(value);
  }

  return { value, onChange }

}

export default UseInput;
