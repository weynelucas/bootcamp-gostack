import React, { Component } from 'react';

import Header from './Header';
import CreatePost from './CreatePost';
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

  addPost = (post) => {
    this.setState({ 
      posts: [
        ...this.state.posts, 
        {  
          id: this.state.posts.length + 1, 
          author: this.state.user,
          ...post 
        }
      ]
    });
  }
  
  render() {
    return this.state.user && (
      <>
        <Header user={this.state.user} />
        <div className="Main-content">
          <CreatePost 
            author={this.state.user} 
            onPostSubmit={this.addPost} 
          />
          
          <PostList posts={this.state.posts}/>
        </div>
      </>
    )

  }
}
