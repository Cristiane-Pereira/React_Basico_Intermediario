import React, { Fragment, useContext, useEffect, useRef } from 'react';
import { PostsProvider } from '../../contexts/PostsProvider';
import { loadPosts } from '../../contexts/PostsProvider/actions';
import { PostsContext } from '../../contexts/PostsProvider/context';

export const ComponentPosts = () => {
  const postsContextLoader = useContext(PostsContext);
  const { postState, postDispatch } = postsContextLoader;
  const isMounted = useRef(true);

  console.log(isMounted.current);

  useEffect(() => {
    loadPosts(postDispatch).then((dispatchIsMounted) => {
      if (isMounted.current) {
        dispatchIsMounted();
      }
    });

    return () => {
      isMounted.current = false;
      console.log(isMounted.current);
    };
  }, [postDispatch]);
  return (
    <Fragment>
      <h1 style={{ marginBottom: 20 }}>Posts</h1>
      {postState.loading && (
        <center>
          <strong>
            <h1>Carregando posts...</h1>
          </strong>
        </center>
      )}

      {postState.posts.map((post) => (
        <>
          <h3 key={post.id}>
            {post.id} &nbsp;
            {post.title}
          </h3>
        </>
      ))}
    </Fragment>
  );
};

export const Posts = () => {
  return (
    <PostsProvider>
      <ComponentPosts />
    </PostsProvider>
  );
};
