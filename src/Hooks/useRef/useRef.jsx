import React, { Fragment, useEffect, useMemo, useRef, useState } from 'react';
import P from 'prop-types';
// import './style.css';

const Post = ({ post, handleClick }) => {
  console.log('Filho renderizou...');

  return (
    <div className="post">
      <h1 onClick={() => handleClick(post.title)}>{post.title}</h1>
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
  handleClick: P.func,
};

const ComponentUseRef = () => {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  const input = useRef(null);
  const contador = useRef(0);

  // const filtered = value
  //   ? posts.filter((post) => {
  //       return post.title.toLowerCase().includes(value.toLocaleLowerCase());
  //     })
  //   : posts;

  console.log('O Pai renderizou...');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((response) => setPosts(response));
  }, []);

  useEffect(() => {
    input.current.focus();
    console.log(input.current);
  }, [value]);

  useEffect(() => {
    contador.current++;
  });

  const handleClick = (value) => {
    setValue(value);
  };

  return (
    <Fragment>
      <div className="App">
        <h6>Renderizou: {contador.current}X</h6>
        <input
          ref={input}
          type="search"
          placeholder="Fiter cards"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        {useMemo(() => {
          return posts.map((post) => (
            <Post key={post.id} post={post} handleClick={handleClick} />
          ));
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

export default ComponentUseRef;
