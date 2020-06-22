import React from 'react';
import useAxios from './useAxios';


function UseAxiosSample(props) {
  const options = {
    url: 'http://dummy.restapiexample.com/api/v1/employees',
  };
  const { loading, error, response, reFetch } = useAxios(options);

  return (
    <div>
      <h4>useAxios Sample</h4>
      <h5>{loading ? 'Loading...' : 'Done'}</h5>
      <h5>{error && error.stack}</h5>
      <p>status: {response && response.status}</p>
      <h4>employee list</h4>
      <ul>
        {response && response.data.data.map(employee => <li key={employee.id}>{employee['employee_name']}</li>)}
      </ul>
      <button onClick={reFetch}>reFetch</button>
      <hr />
    </div>
  );
}

export default UseAxiosSample;
