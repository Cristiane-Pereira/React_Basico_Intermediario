import { useLayoutEffect, useRef, useState } from 'react';

export const ComponetUseMyHook_4 = () => {
  const [counted, setCounted] = useState([0, 1, 2, 3, 4]);
  const divRef = useRef();

  useLayoutEffect(() => {
    const now = Date.now();
    while (Date.now() < now + 1500);
    divRef.current.scrollTop = divRef.current.scrollHeight;
  });

  const handleClick = () => {
    setCounted((c) => [...c, +c.slice(-1) + 1]); //slice pega o ultimo valor do array
  };

  return (
    <>
      <button onClick={handleClick}>Count {counted.slice(-1)}</button>
      <div
        ref={divRef}
        style={{ height: '500px', width: '500px', overflowY: 'scroll' }}
      >
        {counted.map((c) => {
          return <p key={`c-${c}`}>{c}</p>;
        })}
      </div>
    </>
  );
};
