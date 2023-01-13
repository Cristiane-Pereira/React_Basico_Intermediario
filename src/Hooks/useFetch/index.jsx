import { useEffect, useRef, useState } from 'react';

const isObjectEqual = (objA, objB) => {
  return JSON.stringify(objA) === JSON.stringify(objB);
};

/* eslint-disable */
export const useFetch = (url, options) => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [shouldLoader, setShouldLoader] = useState(false);
  const urlRef = useRef(url);
  const optionsRef = useRef(options);

  useEffect(() => {
    if (!isObjectEqual(url, urlRef.current)) {
      urlRef.current = url;
      setShouldLoader((s) => !s);
    }
    if (!isObjectEqual(options, optionsRef.current)) {
      optionsRef.current = options;
      setShouldLoader((s) => !s);
    }
  }, [url, options]);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    const signal = controller.signal;
    // console.log('EFFECT ' + new Date().toLocaleString());
    // console.log(optionsRef);

    const fetchData = async () => {
      await new Promise((r) => setInterval(r, 3000));

      try {
        const response = await fetch(urlRef.current, {
          signal,
          ...optionsRef.current,
        });
        const jsonResult = await response.json();
        setResult(jsonResult);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        // throw e;
        console.warn(e);
      }
    };
    fetchData();

    return () => {
      controller.abort();
    };
  }, [shouldLoader]);

  return [result, loading];
};
