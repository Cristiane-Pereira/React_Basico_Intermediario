import React, { Component, Fragment } from 'react';

class ComponentCicleLife extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'Title 1',
        body: 'corpo 1',
      },
      {
        id: 2,
        title: 'Title 2',
        body: 'corpo 2',
      },
      {
        id: 3,
        title: 'Title 3',
        body: 'corpo 3',
      },
    ],
    counter: 0,
    timeout_clear: null,
  };

  handleTimeout() {
    const { posts, counter } = this.state;
    posts[0].title = 'Título modificado.';

    this.timeout_clear = setTimeout(() => {
      this.setState({ counter: counter + 1 });
    }, 1000);
  }
  componentDidMount() {
    this.handleTimeout();
  }

  componentDidUpdate() {
    clearTimeout(this.timeout_clear);
    this.handleTimeout();
  }

  componentWillUnmount() {
    this.handleTimeout();
  }

  render() {
    const { posts, counter } = this.state;
    return (
      <Fragment>
        <center>
          <h1>Ciclo de Vida</h1>
          {counter}
          {posts.map((post) => (
            <div key={post.id}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
          ))}
        </center>
      </Fragment>
    );
  }
}

export default ComponentCicleLife;
