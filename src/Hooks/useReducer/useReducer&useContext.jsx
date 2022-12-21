import P from 'prop-types';
import React, {
  createContext,
  Fragment,
  useContext,
  useReducer,
  useRef,
} from 'react';

//action.js
export const actions = {
  CHANGE_TITLE: 'CHANGE_TITLE',
};

//data.js
export const globalState = {
  title: 'Título puxado com o uso do useReducer e useContext',
  body: 'UseReducer é exatamente como o useState, porem é usado para se trabalhar com estados complexos (estados baseados em lógica ), iniciando com um estado no reducer e com uma ação, que é disparado com dispatch.',
  counter: 0,
};

//reducer.js
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.CHANGE_TITLE:
      console.log('Mudou');
      return {
        ...state,
        title: action.payload,
      };
  }
  return { ...state };
};

//appContext.jsx
export const Context = createContext();
export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);

  const changeTitle = (payload) => {
    dispatch({
      type: actions.CHANGE_TITLE,
      payload,
    });
  };
  return (
    <Context.Provider value={{ state, changeTitle }}>
      {children}
    </Context.Provider>
  );
};

AppContext.propTypes = {
  children: P.node,
};

//H1
export const H1 = () => {
  const context = useContext(Context);
  const inputRef = useRef();
  return (
    <Fragment>
      <h1 onClick={() => context.changeTitle(inputRef.current.value)}>
        {context.state.title}
      </h1>
      <input type="text" ref={inputRef} />
    </Fragment>
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
