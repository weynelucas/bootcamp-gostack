import React, { Component } from 'react';

import Comment from './Comment';
import SubmitComment from './SubmitComment';

import './Post.css';

export default class Post extends Component {
  render() {
    return (
      <div className="Post">
        <div className="Post-content">
          <div className="Post-header">
            <img className="avatar" src={post.author.avatar} alt={post.author.name} />
            <div className="Post-details">
              <strong>{post.author.name}</strong>
              <small>{post.date}</small>
            </div>
          </div>
          <p>{post.content}</p>
        </div>
        
        <div className="Post-comments">
          {post.comments.map(comment => (
            <Comment key={comment.id} comment={comment}/>
          ))}
  
          <SubmitComment onSubmit={this.onSubmit}/>
        </div>
      </div>
    );
  }
}