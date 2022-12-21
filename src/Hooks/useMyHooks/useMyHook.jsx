import React, { Fragment, useEffect, useRef, useState } from 'react';

const CustomMyHook = (cb, delay = 1000) => {
  const saveCallback = useRef();

  useEffect(() => {
    saveCallback.current = cb;
  }, [cb]);

  useEffect(() => {
    const interval = setInterval(() => {
      saveCallback.current();
    }, delay);

    return () => clearInterval(interval);
  }, [delay]);
};

const ComponetUseMyHook = () => {
  const [counter, setCounter] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [increment, setIncrement] = useState(100);

  CustomMyHook(() => setCounter((c) => c + 1), delay);

  return (
    <Fragment>
      <center>
        <h1>contador: {counter}</h1>
        <h1>delay: {delay}</h1>

        <button
          onClick={() => {
            setDelay((d) => d + increment);
          }}
        >
          {' '}
          + {increment}
        </button>
        <button
          onClick={() => {
            setDelay((d) => d - increment);
          }}
        >
          {' '}
          - {increment}
        </button>

        <br />
        <input
          type="number"
          value={increment}
          onChange={(e) => setIncrement(Number(e.target.value))}
        />
      </center>
    </Fragment>
  );
};

export default ComponetUseMyHook;
