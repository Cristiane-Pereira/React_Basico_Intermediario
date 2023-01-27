import React from 'react';
import P from 'prop-types';
import { useCounterContext } from '../../contexts/CounterContext';

export const Button = ({ text, onButtonClick }) => {
  return (
    <button
      text={text}
      style={{
        width: 270,
        height: 40,
        border: 'none',
        background: 'coral',
        color: '#fff',
        borderRadius: 5,
        margin: 10,
      }}
      onClick={onButtonClick}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: P.string.isRequired,
  onButtonClick: P.func.isRequired,
};
