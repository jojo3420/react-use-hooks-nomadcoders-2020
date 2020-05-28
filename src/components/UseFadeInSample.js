import React from 'react';
import useFadeIn from '../hooks/useFadeIn';


function UseFadeInSample(props) {
  const refH4 =  useFadeIn(5, 1);
  const refP = useFadeIn(2);
  return (
    <div>
      <h4>useFadeIn</h4>
      <h4 { ...refH4}>Hello!</h4>
      <p { ...refP}>Hello!</p>
      <hr />
    </div>
  );
}

export default UseFadeInSample;
