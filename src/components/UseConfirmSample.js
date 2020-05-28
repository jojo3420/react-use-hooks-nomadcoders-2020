import React from 'react';
import useConfirm from "../hooks/useConfirm";


function UseConfirmSample() {
  const run = () => console.log('play run!!');
  const cancel = () => console.log('cancel..');
  const onConfirm = useConfirm('Are You Sure ? ', run, cancel);

  return (
    <div>
      <h5>useConfirm</h5>
      <p>사용자가 민감한 기능을 실행시 한번 더 확인함</p>
      <button onClick={onConfirm}>DELETE</button>
      <hr/>
    </div>
  );
}

export default UseConfirmSample;
