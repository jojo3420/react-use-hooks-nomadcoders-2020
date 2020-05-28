import React, { useState, useEffect } from 'react';


/**
 * useEffect 는 componentDidMount, componentUnMount, componentWillUpdate
 * LifeCycle 를 구현할 수 있다.
 * 1.함수의 두번째 매개변수 dependency(deps)에 빈배열로 지정하면 componentDidMount 된다.
 * => 최초 한번만 이펙트 실행됨
 * 2. dependency 를 생략하면 componentDidUpdate 가 되어 값이 변경되기만 하면 감지하여
 * 이펙트가 실행된다.
 * 3. dependency 배열에 특정 값을 넣으면 넣은 값이 변경 될 경우에만 이펙트 실행됨
 *
 */
function UseEffectSample(props) {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  const sayHello = () => console.log('Hello');

  // 1. componentWillUpdate
  // useEffect(sayHello);

  // 2. componentDidMount
  // useEffect(sayHello, []);

  //3. componentWillUpdate 특정 값
  useEffect(sayHello, [number1]);

  return (
    <div>
      <h4>useEffect 작동 이해</h4>
      <button onClick={() =>setNumber1(number1 + 1)}>number1</button>
      <p>number1: {number1}</p>
      <button onClick={() =>setNumber2(number2 + 1)}>number2</button>
      <p>number2: {number2}</p>
      <hr />
    </div>
  );
}

export default UseEffectSample;
