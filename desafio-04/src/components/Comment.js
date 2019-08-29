import React from 'react';

import './Comment.css';

export default function Comment({ comment }) {
  return (
    <div className="Comment">
      <img src={comment.author.avatar} alt={comment.author.name}/>
      <p>
        <strong>{comment.author.name}</strong> {comment.content}
      </p>
    </div>
  );
}
