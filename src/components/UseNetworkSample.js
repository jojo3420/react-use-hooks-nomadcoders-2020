import React from 'react';
import useNetwork from '../hooks/useNetwork';


function UseNetworkSample() {
  const loggingCallback = onLine => console.log({onLine});
  const onLine = useNetwork(loggingCallback);

  return (
    <div>
      <h3>useNetwork</h3>
      <p>클라이언트 네트워크 연결 상태 확인</p>
      <h4>{onLine ? 'OnLine' : 'OffLine'}</h4>
      <hr/>
    </div>
  );
}

export default UseNetworkSample;
