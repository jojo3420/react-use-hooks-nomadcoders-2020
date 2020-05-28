import React, { useState } from "react";

/**
 * useInput 구현체 with useState
 * @param initialValue: 초기값
 * @param validator: validator function
 * @returns {{onChange: onChange, value: inputValue}}
 */
export default function useInput(initialValue, validator) {
  const [value, setValue] = useState(initialValue);

  const onChange = e => {
    const { target: { value }} = e;
    let willUpdate = true;
    if(typeof validator === 'function') {
      willUpdate = validator(value);
    }
    willUpdate && setValue(value);
  };
  return { value, onChange };
}
