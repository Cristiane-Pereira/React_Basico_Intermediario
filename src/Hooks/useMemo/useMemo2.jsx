import React, { Fragment, useEffect, useMemo, useState } from 'react';
import P from 'prop-types';
import './style.css';

const Post = ({ post }) => {
  console.log('Filho renderizou...');
  return (
    <div className="post">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
};

const ComponentUseMemo = () => {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');

  // const filtered = posts.filter((post) =>
  //   post.title.toLowerCase.includes(value.toLowerCase),
  // );

  console.log('O Pai renderizou...');

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((response) => setPosts(response));
    }, [5000]);
  }, []);

  return (
    <Fragment>
      <div className="App">
        <input
          type="search"
          placeholder="Fiter cards"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        {useMemo(() => {
          return posts.map((post) => <Post key={post.id} post={post} />);
        }, [posts])}

        {posts.length == 0 && (
          <Fragment>
            <center>
              <h3>Carregando ...</h3>
            </center>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

export default ComponentUseMemo;
