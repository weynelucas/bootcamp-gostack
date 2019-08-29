import React from 'react';

import Comment from './Comment';

import './Post.css';

export default function Post({ post }) {
  return (
    <div className="Post">
      <div className="Post-content">
        <div className="Post-header">
          <img src={post.author.avatar} alt={post.author.name} />
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
      </div>
    </div>
  );
}