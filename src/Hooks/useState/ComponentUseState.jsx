import React, { Fragment, useState } from 'react';
import logo from '../../assets/logo.svg';
import './style.css';

const ComponentUseState = () => {
  const [reverse, setReverse] = useState(false);
  const [count, setCount] = useState(0);
  const reverseClass = reverse ? 'reverse' : '';

  const handleRotate = () => {
    setReverse(!reverse);
  };

  return (
    <Fragment>
      <div className="App">
        <header className="App-header">
          <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
          <h3>Contador {count}</h3>
          <div className="row">
            <button onClick={handleRotate} type="button">
              Reverse {reverseClass}
            </button>
            <button onClick={() => setCount(count + 1)} type="button">
              Incrementar
            </button>
            <button onClick={() => setCount(count - 1)} type="button">
              Decrementar
            </button>
          </div>
        </header>
      </div>
    </Fragment>
  );
};

export default ComponentUseState;
