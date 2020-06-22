import React, { useState, useEffect, useCallback } from 'react';


function useAxios2(callback, deps) {
    const [loading, setLoading] = useState(true);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    // const [trigger, setTrigger] = useState(0);


    // const handleRefresh = useCallback(() => {
    //     setLoading(true);
    //     setResponse(null);
    //     setError(null);
    //     setTrigger(new Date.now());
    // }, []);

    if (callback && typeof callback === 'function') {
      useEffect(() => {
        const fetch = async () => {
          try {
            const result = await callback();
            console.debug({ result });
            setResponse(result);
          } catch(e){
            console.error(e);
            setError(e);
          }
          setLoading(false);
        }
        fetch();

      }, [...deps, /*trigger*/]);

    } else {
      throw new Error('callback function is not working!');
    }

    return [
      loading,
      response,
      error,
      // handleRefresh,
    ]

}

export default useAxios2;
