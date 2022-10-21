import React, { Fragment, useContext } from 'react';
import { GlobalContext } from '../../contexts/AppContext';

export const Subtitle = () => {
  const theContext = useContext(GlobalContext);
  const {
    state: { body, counter },
    state,
    setState,
  } = theContext;

  return (
    <Fragment>
      <p onClick={() => setState({ ...state, counter: counter + 1 })}>{body}</p>
      <span>{counter}</span>
    </Fragment>
  );
};
