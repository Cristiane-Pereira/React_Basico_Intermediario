import React, { Fragment, useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Button = ({ incrementButton }) => {
  //component personalizado.
  console.log('O filho renderizou....');
  return <button onClick={() => incrementButton(10)}>+</button>;
};

Button.propTypes = {
  incrementButton: PropTypes.func,
};

const ComponentUseMemo = () => {
  const [count, setCount] = useState(0);

  //Callback serve para otimizar e memorizar estados, pois só renderiza quando a sua dependência for chamada.
  const incrementCounter = useCallback((num) => {
    setCount((count) => count + num); //funcão de callback.
  }, []); //quando não tem dependências ele só vai ser renderizado uma única vez.

  console.log('O Pai renderizou......');

  return (
    <Fragment>
      <div className="App">
        <h1>Contador: {count}</h1>
        {useMemo(() => {
          //useMemo é como se fosse um cache(memorizar), se o estado do botão mudar ele ira renderizar novamente se não mudar ele vai permanecer o mesmo sempre mais guardará seu valor em cache.
          return <Button incrementButton={incrementCounter} />;
        }, [incrementCounter])}
      </div>
    </Fragment>
  );
};

export default ComponentUseMemo;
