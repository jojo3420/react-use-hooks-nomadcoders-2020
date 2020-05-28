import React from 'react';
import usePreventLeave from "../hooks/usePreventLeave";


function UsePreventLeaveSample() {
  const {  enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div>
      <h4>usePreventLeave</h4>
      <p>사용자가 중간에 새로고침하거나, 다른 화면으로 이동하는걸 경고 하기위한 hooks</p>
      <p>enable prevent 버튼을 누른후 새로고침하거나, 이동하면 alert popup</p>
      <button onClick={enablePrevent}>enable Prevent</button>
      <button onClick={disablePrevent}>disable Prevent</button>
      <hr />
    </div>
  );
}

export default UsePreventLeaveSample;
