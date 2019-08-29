import React, { Component } from 'react';

import './SubmitPost.css';

export default class SubmitPost extends Component {
  state = {
    content: '',
  }

  handleInputChange = e => {
    this.setState({ content: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.content);

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
