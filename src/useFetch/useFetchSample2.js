import React from 'react';
import useFetch2 from './useFetch2';


function UseFetchSample2() {
  const url = 'https://aws.random.cat/meow';
  const { loading, error, response } = useFetch2(url);
  return (
    <div>
      <h4>useFetch2</h4>
      <div>{loading ? 'Loading...' : 'Done'}</div>
      <div>{error && error}</div>
      {/*<div>{JSON.stringify(response)}</div>*/}
      {response && <img style={{width: 300}} src={response.data.file} alt={'고양이'}/> }
      <hr />
    </div>
  );
}

export default UseFetchSample2;
