import { useCallback, useEffect, useState } from 'react';

export const useAsync = (asyncFunction, shouldRun) => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  const run = useCallback(() => {
    console.log('EFFECT ' + new Date().toLocaleString());
    setResult(null);
    setError(null);

    setStatus('pending');

    return asyncFunction()
      .then((response) => {
        setStatus('settled');
        setResult(response);
      })
      .catch((error) => {
        setStatus('error');
        setError(error);
      });
  }, [asyncFunction()]);

  useEffect(() => {
    if (shouldRun) {
      run();
    }
  }, [run, shouldRun]);
  return [run, result, error, status];
};
