import React, { useContext } from 'react';

const GlobalContext = React.createContext();
const globalState = {
  title: 'Título puxado com o uso do useContext',
  body: 'O body do context',
  counter: 0,
};

// eslint-disable-next-line
const Container = ({ children }) => {
  return <div className="app">{children}</div>;
};

// eslint-disable-next-line
const Title = () => {
  const theContext = useContext(GlobalContext);
  return <h1>{theContext.title}</h1>;
};

// eslint-disable-next-line
const Paragrafo = () => {
  const theContext = useContext(GlobalContext);
  return <p>{theContext.body}</p>;
};

function ComponentUseContext_1() {
  return (
    <GlobalContext.Provider value={globalState}>
      <Container>
        <Title />
        <Paragrafo />
      </Container>
    </GlobalContext.Provider>
  );
}

export default ComponentUseContext_1;
