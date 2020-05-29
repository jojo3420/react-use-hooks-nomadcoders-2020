import React from 'react';
import useTitle2 from './useTitle2';


function UseTitleSample2() {

  const setTitle = useTitle2('loading...');
  setTimeout(() => setTitle('Home'), 4000);
  return (
    <div>
      <h4>useTitle</h4>
      <p>처음 시작시 head>title 정보를 loading 으로 변경후 5초후에 Home으로 변경</p>
      <hr />
    </div>
  );
}

export default UseTitleSample2;
