// src/Posts.js

import React, { Component } from 'react';
import { Post } from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false
    };
  }

  // Step 6: Define loadPosts()
  loadPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        const postList = data.map(
          item => new Post(item.userId, item.id, item.title, item.body)
        );
        this.setState({ posts: postList });
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
        this.setState({ hasError: true });
      });
  };

  // Step 7: componentDidMount
  componentDidMount() {
    this.loadPosts();
  }

  // Step 9: componentDidCatch
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    alert('An error occurred: ' + error.message);
  }

  // Step 8: render the posts
  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong while loading posts.</h2>;
    }

    return (
      <div style={{ padding: '20px' }}>
        <h1>Blog Posts</h1>
        {this.state.posts.map(post => (
          <div key={post.id} style={{ marginBottom: '20px' }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
