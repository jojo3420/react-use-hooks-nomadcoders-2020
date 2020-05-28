import React from 'react';
import useNotification from "../hooks/useNotification";


function UseNotificationSample(props) {
  const title = '알림이 도착했습니다.🚀';
  const options = {body: ' Are you OK?', icon: '🚀' };
  const callback = notification => {
    console.log(notification);
  };

  const askNotification = useNotification(title, options, callback);
  return (
    <div>
      <h4>useNotification</h4>
      <button onClick={askNotification}>알림</button>
      <hr />
    </div>
  );
}

export default UseNotificationSample;
