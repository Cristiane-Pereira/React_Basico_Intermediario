import React, { Suspense, useState } from 'react';

/* eslint-disable*/
const loadComponent = () => {
  console.log('Componente carregando...');
  return import('./LazyComponent');
};

const LazyComponent = React.lazy(loadComponent);

const LazyReactComponent = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <p>
        <button onMouseOver={loadComponent} onClick={() => setShow((s) => !s)}>
          Show{' '}
          {show ? 'LazyComponent on screen' : 'LazyComponent is off screen'}
        </button>
      </p>
      <Suspense fallback={<p>Carregando...</p>}>
        {show && <LazyComponent />}
      </Suspense>
    </div>
  );
};

export default LazyReactComponent;
