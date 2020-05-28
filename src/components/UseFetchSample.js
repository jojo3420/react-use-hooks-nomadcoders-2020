import React from 'react';
import useFetch from '../hooks/useFetch';

function UseFetchSample() {

  const [data, loading, error] = useFetch('https://aws.random.cat/meow');
  return (
    <div>
      <h4>UseFetchSample</h4>
      <p>component did mount 시점에 image data fetch</p>
      {loading && <p>Loading...</p>}
      {!loading && error && <span>{error}</span>}
      {data && <img src={data.file} title={'고양이'} width="400" /> }
      <hr />
    </div>
  );
}

export default UseFetchSample;
