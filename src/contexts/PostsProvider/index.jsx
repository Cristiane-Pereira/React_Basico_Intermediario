import P from 'prop-types';
import { useReducer } from 'react';
import { PostsContext } from './context';
import { data } from './data';
import { reducer } from './reducer';

export const PostsProvider = ({ children }) => {
  const [postState, postDispatch] = useReducer(reducer, data);

  return (
    <PostsContext.Provider value={{ postState, postDispatch }}>
      {children}
    </PostsContext.Provider>
  );
};

PostsProvider.propTypes = {
  children: P.node.isRequired,
};
