import React, { useContext, useState } from 'react';

const GlobalContext = React.createContext();
const globalState = {
  title: 'Título puxado com o uso do useContext',
  body: 'O body do context...',
  counter: 0,
};

// eslint-disable-next-line
const Container = ({ children }) => {
  return <div className="app">{children}</div>;
};

// eslint-disable-next-line
const Title = () => {
  const theContext = useContext(GlobalContext);
  const { contextState } = theContext;
  return <h1>{contextState.title}</h1>;
};

// eslint-disable-next-line
const Paragrafo = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { body, counter },
    contextState,
    setContextState,
  } = theContext;
  return (
    <>
      <p
        onClick={() =>
          setContextState({ ...contextState, counter: counter + 1 })
        }
      >
        {body}
      </p>
      <span>{counter}</span>
    </>
  );
};

function ComponentUseContext_2() {
  const [contextState, setContextState] = useState(globalState);
  return (
    <GlobalContext.Provider value={{ contextState, setContextState }}>
      <center>
        <Container>
          <Title />
          <Paragrafo />
        </Container>
      </center>
    </GlobalContext.Provider>
  );
}

export default ComponentUseContext_2;
