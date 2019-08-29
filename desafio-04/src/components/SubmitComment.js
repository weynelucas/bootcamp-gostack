import React, { Component } from 'react';

import './SubmitComment.css';

export default class SubmitComment extends Component {
  state = {
    author: {
      name: 'Vitória Souza',
      avatar: 'https://uinames.com/api/photos/female/11.jpg'
    }
  }

  render() {
    const { author } = this.state;

    return (
      <div className="SubmitComment">
        <img src={author.avatar} alt={author.name} className="avatar"/>
        <input type="text" placeholder="Escreva um comentário..."/>
      </div>
    );
  }
}
