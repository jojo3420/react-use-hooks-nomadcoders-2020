import React, { useState, useRef, useEffect} from 'react';


function UseInput() {
  const ref = useRef();
  const [value, setValue] = useState('');

  const onChange = e => {
    const { target: {value}} = e;
    setValue(value);
  }

  return { ref, value, onChange }

}

export default UseInput;
