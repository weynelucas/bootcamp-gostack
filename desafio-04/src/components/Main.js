import React, { Component } from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import Header from './Header';
import SubmitPost from './SubmitPost';
import PostList from './PostList';

import { getRandomAuthor } from '../services/author'

import './Main.css';

export default class Main extends Component {
  state = {
    user: {},
    posts: [],
  }

  async loadUser() {
    this.setState({
      user: await getRandomAuthor()
    })
  }

  componentDidMount() {
    this.loadUser();
  }

  addPost = (content) => {
    this.setState({ 
      posts: [
        ...this.state.posts, 
        {  
          id: this.state.posts.length + 1, 
          author: this.state.user,
          content: content,
          date: format(new Date(), 'dd MMM yyyy', { locale: ptBR }),
          comments: [],
        }
      ]
    });
  }
  
  render() {
    return this.state.user && (
      <>
        <Header user={this.state.user} />
        <div className="Main-content">
          <SubmitPost 
            author={this.state.user} 
            onSubmit={this.addPost} 
          />
          
          <PostList posts={this.state.posts}/>
        </div>
      </>
    )

  }
}
