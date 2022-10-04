import React, { Fragment, useState, useEffect } from 'react';
import './style.css';

const eventFn = () => {
  console.log('Fui clicado');
};

const ComponentUseEffect = () => {
  const [count, setCount] = useState(0);

  //componentDidUpdate = executa toda vez que é atualizado.
  useEffect(() => {
    console.log('componentDidUpdate');
  });

  //componentDidMount = executa apenas 1 vez.
  // useEffect(() => {
  //   console.log('componentDidMount');
  // }, []);

  useEffect(() => {
    document.querySelector('h1')?.addEventListener('click', eventFn);

    //componentWillUmount - limpeza de lixo de estados anteriores.
    return () => {
      document.querySelector('h1')?.removeEventListener('click', eventFn);
    };
  }, []);

  //componentDidMount com dependência = executa toda vez que sua dependência mudar.
  useEffect(() => {
    console.log('C1:', count);
  }, [count]);

  return (
    <Fragment>
      <div className="App">
        <h1>Contador: {count}</h1>
        <button type="button" onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
    </Fragment>
  );
};

export default ComponentUseEffect;
