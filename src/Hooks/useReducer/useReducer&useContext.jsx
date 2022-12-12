import P from 'prop-types';
import React, { createContext, useContext, useReducer } from 'react';

//action.js
export const actions = {
  CHANGE_TITLE: 'CHANGE_TITLE',
};

//data.js
export const globalState = {
  title: 'Título puxado com o uso do useReducer',
  body: 'UseReducer é exatamente como o useState, porem é usado para se trabalhar com estados complexos (estados baseados em lógica ), iniciando com um estado no reducer e com uma ação, que é disparado com dispatch.',
  counter: 0,
};

//reducer.js
export const reducer = (state, action) => {
  console.log(action);
  return { ...state };
};

//appContext.jsx
export const Context = createContext();
export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

AppContext.propTypes = {
  children: P.node,
};
//H1
export const H1 = () => {
  const context = useContext(Context);
  return (
    <h1 onClick={() => context.dispatch({ type: actions.CHANGE_TITLE })}>
      {context.state.title}
    </h1>
  );
};

//App.js
function ComponentUseReducer_2() {
  return (
    <center>
      <AppContext>
        <H1 />
      </AppContext>
    </center>
  );
}

export default ComponentUseReducer_2;
