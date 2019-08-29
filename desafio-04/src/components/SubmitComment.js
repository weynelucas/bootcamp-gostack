import React, { Component } from 'react';

import { getRandomUser } from '../services/user';

import './SubmitComment.css';
import defaultAvatar from '../assets/default-male-avatar.jpg';


export default class SubmitComment extends Component {
  state = {
    content: '',
    author: {
      avatar: defaultAvatar,
    },
  }

  async loadAuthor() {
    this.setState({
      author: await getRandomUser(),
    })
  }

  clearInput() {
    this.setState({ content: '' })
  }

  componentDidMount() {
    this.loadAuthor();
  }

  handleInputChange = e => {
    this.setState({ content: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit({
      author: this.state.author,
      content: this.state.content,
    })

    this.clearInput();
    this.loadAuthor();
  }

  render() {
    const { author, content } = this.state;

    return (
      <div className="SubmitComment">
        <form onSubmit={this.handleSubmit}>
          <img src={author.avatar} alt={author.name} className="avatar"/>
          <input 
            type="text" 
            placeholder="Escreva um comentário..."
            value={content}
            onChange={this.handleInputChange}
          />
        </form>
      </div>
    );
  }
}
