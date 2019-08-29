import React, { Component } from 'react';
import Post from './Post';
import CreatePost from './CreatePost';

import './PostList.css';

export default class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Filipe Deschamps',
          avatar: 'https://avatars0.githubusercontent.com/u/4248081?v=4'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4'
            },
            content: "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
          }
        ],
      },
      {
        id: 2,
        author: {
          name: 'Robson Marques',
          avatar: 'https://avatars2.githubusercontent.com/u/861751?v=4'
        },
        date: '04 Jun 2019',
        content: 'Fala galera, beleza?\n\nEstou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais aí fazendo, comenta na publicação para trocarmos uma ideia.',
        comments: [
          {
            id: 1,
            author: {
              name: 'Cleiton Souza',
              avatar: 'https://avatars1.githubusercontent.com/u/4669899?v=4'
            },
            content: "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!"
          },
          {
            id: 2,
            author: {
              name: 'Guilherme Pellizzetti',
              avatar: 'https://avatars3.githubusercontent.com/u/16545335?v=4'
            },
            content: "Que maaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!"
          }
        ],
      }
    ]
  };

  render() {
    return (
      <>
        <CreatePost/>
        <div className="PostList">
          {this.state.posts.map(post => (
            <Post key={post.id} post={post}/>
          ))}
        </div>
      </>
    );
  }
}