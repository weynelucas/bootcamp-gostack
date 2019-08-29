import React, { Component } from 'react';

import { getRandomAuthor } from '../services/author';

import './SubmitComment.css';

export default class SubmitComment extends Component {
  state = {
    author: {}
  }

  async loadAuthor() {
    this.setState({
      author: await getRandomAuthor(),
    })
  }

  componentDidMount() {
    this.loadAuthor();
  }

  render() {
    const { author } = this.state;

    return (
      <div className="SubmitComment">
        <form>
          <img src={author.avatar} alt={author.name} className="avatar"/>
          <input type="text" placeholder="Escreva um comentário..."/>
        </form>
      </div>
    );
  }
}
