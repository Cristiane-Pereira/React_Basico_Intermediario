import React, { useReducer } from 'react';

const globalState = {
  title: 'Título puxado com o uso do useReducer',
  body: 'UseReducer é exatamente como o useState, porem é usado para se trabalhar com estados complexos (estados baseados em lógica ), iniciando com um estado no reducer e com uma ação, que é disparado com dispatch.',
  counter: 0,
};

const reducer = (state, action) => {
  // console.log(state);
  // console.log(action);

  switch (action.type) {
    case 'muda': {
      console.log('Chamou muda com', action.payload);
      return { ...state, title: 'Data: ' + action.payload };
    }

    case 'inverter': {
      console.log('Chamou inverter');
      const { title } = state;
      return { ...state, title: title.split('').reverse().join('') };
    }
  }
  console.log('NENHUMA ACTION ENCONTRADA!');
  return { ...state };
};

function ComponentUseReducer() {
  const [state, dispatch] = useReducer(reducer, globalState);
  // eslint-disable-next-line
  const { title, body, counter } = state;
  return (
    <center>
      <div style={{ margin: '20px' }}>
        <h1>{title}</h1>
        <span>{body}</span>
        <br />
        <br />
        <div
          style={{
            justifyContent: 'space-evenly',
            display: 'flex',
            align: 'center',
            width: '340px',
          }}
        >
          <button
            type="button"
            onClick={() =>
              dispatch({
                type: 'muda',
                payload: new Date().toLocaleString('pt-BR'),
              })
            }
            style={{
              padding: '10px',
              color: '#fff',
              background: 'coral',
              border: 'none',
              borderRadius: '5px',
            }}
          >
            Muda texto
          </button>
          <button
            type="button"
            onClick={() => dispatch({ type: 'inverter' })}
            style={{
              padding: '10px',
              color: '#fff',
              background: 'coral',
              border: 'none',
              borderRadius: '5px',
            }}
          >
            Reverte texto
          </button>
          <button
            type="button"
            onClick={() => dispatch({ type: 'action_inexistente' })}
            style={{
              padding: '10px',
              color: '#fff',
              background: 'coral',
              border: 'none',
              borderRadius: '5px',
            }}
          >
            Nenhuma ação
          </button>
        </div>
      </div>
    </center>
  );
}

export default ComponentUseReducer;
