import React, { Component } from 'react';

import Comment from './Comment';
import SubmitComment from './SubmitComment';

import './Post.css';

export default class Post extends Component {
  state = {
    comments: []
  }

  addComment = comment => {
    this.setState({
      comments: [
        ...this.state.comments,
        {
          id: this.state.comments.length + 1,
          ...comment
        }
      ]
    })
  }

  render() {
    const { post } = this.props;
    const { comments } = this.state;

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
          {comments.map(comment => (
            <Comment key={comment.id} comment={comment}/>
          ))}
  
          <SubmitComment onSubmit={this.addComment}/>
        </div>
      </div>
    );
  }
}