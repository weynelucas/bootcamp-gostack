import React, { Component } from 'react';

import './Header.css';
import logo from '../assets/logo.svg'

export default function Header({ user }) {
  const { name = 'Meu Perfil', avatar } = user;

  return (
    <nav>
      <img src={logo} alt="Facebook" />
      <ul>
        <li>
          <img className="avatar" src={avatar} />
          {name}
        </li>
      </ul>
    </nav>
  );
}