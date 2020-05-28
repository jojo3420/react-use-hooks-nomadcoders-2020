import React from 'react';
import useClick from '../hooks/useClick';

function UseClickSample() {
  const clickCallback = () => alert('hello!');
  const titleRef = useClick(clickCallback);

  return (
    <div>
      <h4>useClick</h4>
      <h2 ref={titleRef}>여기를 클릭하면 안내가 열립니다.</h2>
      <hr />
    </div>
  );
}

export default UseClickSample;
