import React from 'react';
import useScroll from '../hooks/useScroll';


function UseScrollSample(props) {
  const { scrollY } = useScroll();

  return (
    <div>
      <h4>useScroll</h4>
      <p>스크롤 감지</p>
      <p style={{ color: scrollY >= 1000 ? 'red': ''}}>screenY 의 높이가 1000 이상이면 색상 변경</p>
      <hr />
    </div>
  );
}

export default UseScrollSample;
