import { useState } from 'react';
import { useCounterContext } from '../../contexts/CounterContext';
import { Button } from '../Button';
import { Heading } from '../Heading';

export const ComponetCounterProvider = () => {
  const [state, actions] = useCounterContext();

  const handleError = () => {
    actions
      .asyncError()
      .then((r) => console.log(r))
      .catch((e) => console.log(e.name, ':', e.message));
  };

  return (
    <div>
      <center>
        <Heading />
        <Button text="Increase" onButtonClick={actions.increase} />
        <Button text="Decrease" onButtonClick={actions.decrease} />
        <Button text="Reset" onButtonClick={actions.reset} />
        <Button onButtonClick={() => actions.setCounter({ counter: 10 })}>
          set 10
        </Button>
        <Button onButtonClick={() => actions.setCounter({ counter: 100 })}>
          set 100
        </Button>
        <Button
          disabled={state.loading}
          onButtonClick={actions.async_increase_start}
        >
          async increase
        </Button>
        <Button disabled={state.loading} onButtonClick={handleError}>
          async error
        </Button>
      </center>
    </div>
  );
};
