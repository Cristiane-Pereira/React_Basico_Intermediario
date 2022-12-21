import React, { Fragment, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';

//component personalizado.
const Button = React.memo(function Button({ incrementButton }) {
  //React.memo é como se fosse um cache(memorizar), se o estado do botão mudar ele ira renderizar novamente se não mudar ele vai permanecer o mesmo sempre.
  console.log('O filho renderizou....');
  return <button onClick={() => incrementButton(10)}>+</button>;
});

Button.propTypes = {
  incrementButton: PropTypes.func,
};

const ComponentUseCallback = () => {
  const [count, setCount] = useState(0);

  console.log('O Pai renderizou......');use

  //Callback serve para otimizar e memorizar estados, pois só renderiza quando a sua dependência for chamada.
  const incrementCounter = useCallback((num) => {
    setCount((count) => count + num); //funcão de callback.
  }, []); //quando não tem dependências ele só vai ser renderizado uma única vez.

  return (
    <Fragment>
      <div className="App">
        <h1>Contador: {count}</h1>
        <Button incrementButton={incrementCounter} />
      </div>
    </Fragment>
  );
};

export default ComponentUseCallback;
