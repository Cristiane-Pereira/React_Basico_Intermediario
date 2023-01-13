import React, { Fragment, useState } from 'react';
import { useFetch } from '../useFetch';

const ComponetUseMyHook_2 = () => {
  const [postId, setPostId] = useState('');
  const [result, loading] = useFetch(
    'https://jsonplaceholder.typicode.com/posts/' + `${postId}`,
    {
      headers: {
        abc: '10',
      },
    },
  );

  // console.log(result, loading);
  // useEffect(() => {
  //   console.log('ID do post ' + postId);
  // }, [postId]);

  const handleClick = (id) => {
    setPostId(() => id);
  };

  return (
    <Fragment>
      {loading && (
        <center>
          <b>Loading...</b>
        </center>
      )}
      {result?.length > 0 ? (
        result.map((item) => (
          <div key={item.id} onClick={() => handleClick(item.id)}>
            <h3>{item.title}</h3>
          </div>
        ))
      ) : (
        <div onClick={() => handleClick('')}>
          <h3>{result.title}</h3>
        </div>
      )}
    </Fragment>
  );
};

export default ComponetUseMyHook_2;
