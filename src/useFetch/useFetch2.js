import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function useFetch2(url) {
  const [state, setState] = useState({
    loading: true,
    error: null,
    response: null,
  });

  useEffect(() => {
    axios.get(url)
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
          response: null,
          error,
        });
    });
  }, []);

  return state;
}
