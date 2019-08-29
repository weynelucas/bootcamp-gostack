import React, { Component } from 'react';
import Post from './Post';

import './PostList.css';

export default class PostList extends Component {
  render() {
    return (
      <div className="PostList">
        {this.props.posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    );
  }
}