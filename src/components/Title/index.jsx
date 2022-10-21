import React, { useContext } from 'react';
import { GlobalContext } from '../../contexts/AppContext';

export const Title = () => {
  const theContext = useContext(GlobalContext);
  const { state } = theContext;

  return <h1>{state.title}</h1>;
};
