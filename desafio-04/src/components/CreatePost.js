import React, { Component } from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale'

import { getRandomAuthor } from '../services/author';

import './CreatePost.css';

export default class CreatePost extends Component {
  state = {
    content: '',
  }

  handleInputChange = e => {
    this.setState({ content: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.onPostSubmit({
      content: this.state.content,
      date: format(new Date(), "dd MMM yyyy", { locale: ptBR }),
      comments: [],
    });

    this.setState({ content: '' });
  }

  render() {
    const { author } = this.props;
    const { content } = this.state;

    return (
      <div className="CreatePost">
        { author && (
          <form onSubmit={this.handleSubmit}>
            <img src={author.avatar} alt={author.name}/>
            <input 
              type="text"
              onChange={this.handleInputChange}
              value={content}
              placeholder={`No que você está pensando, ${author.name}?`}
            />

          </form>
        ) }
      </div>
    );
  }
}
