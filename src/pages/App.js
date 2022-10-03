import { Fragment } from 'react';
import ComponentCicleLife from '../Hooks/useState/CicleLife';
import ComponentUseState from '../Hooks/useState/ComponentUseState';
import ComponentDataFetch from '../Hooks/useState/DataFetch';
// import ClassState from '../Hooks/useState/ClassSetState';

function App() {
  return (
    <Fragment>
      <ComponentDataFetch />
      {/* <ComponentCicleLife /> */}
      {/* <ComponentUseState /> */}
      {/* <ClassState /> */}
    </Fragment>
  );
}

export default App;
