import React from 'react';
import useScreenLeave from "../hooks/useScreenLeave";

function UseScreenLeave(props) {
  useScreenLeave(() => console.log('please leave screen.'));

  return (
    <div>
      <h4>useScreenLeave</h4>
      <p>사용자 마우스가 스크린울 벗어나면 벗어나지 못하도록 뭔가를 한다.</p>
      <hr/>
    </div>
  );
}

export default UseScreenLeave;
