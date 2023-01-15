import React, { useEffect } from 'react';
import { useAsync } from '../useAsync';

const fetchData = async () => {
  await new Promise((r) => setTimeout(r, 2000));
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const json = await data.json();
  return json;
};

/* eslint-disable */
const ComponetUseMyHook_3 = () => {
  const [reFetchData, result, error, status] = useAsync(fetchData, false);

  useEffect(() => {
    reFetchData();
  }, []);

  if (status === 'idle') {
    return <pre>Nada executando</pre>;
  }

  if (status === 'pending') {
    return <pre>Loadding...</pre>;
  }

  if (status === 'settled') {
    return <pre>{JSON.stringify(result, null, 2)}</pre>;
  }

  if (status === 'error') {
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  }

  return 'Erro ao carregar os posts, tente mais tarde! :(';
};

export default ComponetUseMyHook_3;
