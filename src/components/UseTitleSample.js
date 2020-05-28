import React from 'react';
import useTitle from '../hooks/useTitle';

function UseTitleSample(props) {
  const setTitle = useTitle('loading...');

  setTimeout(() => {
    setTitle('Home');
  }, 3000);
  return (
    <div>
      <h4>useTitle</h4>
      <p>html > head > title 3초후에 loading... ==> Home 변경</p>
      <hr />
    </div>
  );
}

export default UseTitleSample;
