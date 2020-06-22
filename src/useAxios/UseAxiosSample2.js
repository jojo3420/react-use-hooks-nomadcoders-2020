import React from 'react';
import useAxios2 from './useAxios2';
import axios from 'axios';

function UseAxiosSample2() {
  const [loading, response, error] = useAxios2(() => {
    const url = 'http://dummy.restapiexample.com/api/v1/employees';
    return axios.get(url);
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>
  if (!response) return null;


  const {data} = response.data;

  return (
    <div>
      <h2>useAxios2</h2>
      <textarea name="data"
                value={JSON.stringify(data, null, 2)}
                cols="30"
                rows="10"
      />
      <ul>
        {data.map(employee => {
          return <li key={employee.id}>{employee['employee_name']}</li>
        })}
      </ul>
      <hr/>
    </div>
  );
}

export default UseAxiosSample2;
