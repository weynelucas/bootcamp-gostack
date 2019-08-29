import React, { Component } from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import Header from './Header';
import SubmitPost from './SubmitPost';
import PostList from './PostList';

import { getRandomUser } from '../services/user'

import './Main.css';
import defaultAvatar from '../assets/default-male-avatar.jpg';

export default class Main extends Component {
  state = {
    user: {
      avatar: defaultAvatar,
    },
    posts: [],
  }

  async loadUser() {
    this.setState({
      user: await getRandomUser()
    });
  }

  componentDidMount() {
    this.loadUser();
  }

  addPost = (content) => {
    this.setState({ 
      posts: [
        {  
          id: this.state.posts.length + 1, 
          author: this.state.user,
          content: content,
          date: format(new Date(), 'dd MMM yyyy', { locale: ptBR }),
        },
        ...this.state.posts, 
      ]
    });
  }
  
  render() {
    return this.state.user && (
      <>
        <Header user={this.state.user} />

        <div className="Main-content">
          <SubmitPost author={this.state.user} onSubmit={this.addPost} />
          
          <PostList posts={this.state.posts}/>
        </div>
      </>
    )

  }
}
