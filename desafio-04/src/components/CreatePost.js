import React, { Component } from 'react';

import { getRandomAuthor } from '../services/author';

export default class CreatePost extends Component {
  state = {
    content: '',
    author: {

    }
  }


  async loadAuthor() {
    this.setState({
      author: await getRandomAuthor()
    });
  }

  componentDidMount() {
    this.loadAuthor();
  }

  handleInputChange = e => {
    this.setState({ content: e.target.value });
  }

  render() {
    const { content, author } = this.state;
    console.log(author);
    return (
      <div className="CreatePost">
        { author && (
          <form>
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
