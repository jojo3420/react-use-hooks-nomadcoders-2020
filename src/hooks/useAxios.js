import React, {useState, useEffect} from 'react';
import defaultInstance from 'axios';

function UseAxios(options, axiosInstance = defaultInstance) {
  const [state, setState] = useState({
    loading: true,
    error: null,
    response: null,
  });
  const [trigger, setTrigger] = useState(0);


  if (!options.url) {
    throw new Error('option.url is empty');
  }

  const reFetch = () => {
    setState({...state, loading: true, error: null, response: null});
    setTrigger(Date.now());
  };

  useEffect(() => {
    axiosInstance(options)
      .then(response => {
      setState({
        ...state,
        loading: false,
        error: null,
        response
      });
    })
      .catch(error => {
        setState({
          ...state,
          loading: false,
          data: null,
          error
        });
      });
  }, [trigger]);

  return {
    ...state, reFetch
  }
}

export default UseAxios;
