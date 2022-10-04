import { Fragment } from 'react';
import ComponentUseMemo from './Hooks/useMemo/useMemo2';
// import ComponentUseMemo from './Hooks/useMemo/useMemo1';
// import ComponentUseCallback from './Hooks/useCallback/useCallback';
// import ComponentUseEffect from './Hooks/useEffect/useEffect';
// import ComponentUseState from './Hooks/useState/ComponentUseState';
// import ClassState from './Hooks/useState/ClassSetState';

function App() {
  return (
    <Fragment>
      {/* <ComponentUseState /> */}
      {/* <ClassState /> */}
      {/* <ComponentUseEffect /> */}
      {/* <ComponentUseCallback /> */}
      <ComponentUseMemo />
    </Fragment>
  );
}

export default App;
