import React, { useRef } from 'react';


/**
 * useRef => Reference 약자
 * @param props
 * @returns {*}
 * @constructor
 */
export default function UseRefSample() {
  const myInput = useRef();
  setTimeout(() => {
    console.log(myInput.current);
    // debugger;
    // 최초 렌더링 할때는 undefined 이고 할당된 이후에 reference 를 가지고 있음.
    if (myInput.current) {
      myInput.current.focus();
    }
  }, 5000);

  return (
    <div>
      <h4>useRef 기본 예제</h4>
      <input placeholder="3초에 포커스 됩니다." ref={myInput} value={''} />
      <hr />
    </div>
  );
}

