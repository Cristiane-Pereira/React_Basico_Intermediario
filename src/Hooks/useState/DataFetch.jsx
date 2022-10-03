import React, { Component } from 'react';
import './style.css';

class ComponentDataFetch extends Component {
  state = {
    posts: [],
    photos: [],
    allPosts: [],
    page: 0,
    postsPerPage: 10,
    search: '',
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

    const postsJson = await posts.json();
    const photosJson = await photos.json();

    //Método zip, onde une dois arrays pegando pelo array menor (100 posts) e mesclando com o array maior (5000 photos) através do index.
    const postAndPhotos = postsJson.map((post, idx) => {
      return { ...post, cover: photosJson[idx].url };
    });

    const { page, postsPerPage } = this.state;
    this.setState({
      posts: postAndPhotos.slice(page, postsPerPage),
      allPosts: postAndPhotos,
    });
  };

  loadMorePosts = () => {
    const { page, postsPerPage, allPosts, posts } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage });
  };

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ search: value });
  };

  render() {
    const { posts, page, postsPerPage, allPosts, search } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;
    const filteredPosts = search
      ? allPosts.filter((post) => {
          return post.title.toLowerCase().includes(search.toLocaleLowerCase());
        })
      : posts;
    return (
      <section className="container">
        {search ? <h1>Search value: {search}</h1> : null}

        <input
          onChange={this.handleChange}
          type="search"
          value={search}
          placeholder="Filtar cards"
        />
        <br />
        <br />

        {filteredPosts.length > 0 ? (
          <div className="posts">
            {filteredPosts.map((post) => (
              <div className="post" key={post.id}>
                <img src={post.cover} alt={post.title} />
                <div className="post-content">
                  <h2>{post.title}</h2>
                  <p>{post.body}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <center>
            <h2>Nenhum post encontrado :(</h2>
          </center>
        )}

        <div>
          {!search && (
            <button
              type="button"
              className="btn"
              onClick={this.loadMorePosts}
              disabled={noMorePosts}
            >
              + Load More +
            </button>
          )}
        </div>
      </section>
    );
  }
}

export default ComponentDataFetch;
