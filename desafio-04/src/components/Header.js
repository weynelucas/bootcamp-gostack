import React, { Component } from 'react';

import './Header.css';
import logo from '../assets/logo.svg'

export default function Header({ user }) {
  return (
    <nav>
      <img src={logo} alt="Facebook" />
      <ul>
        <li>
          <img className="avatar" src={user.avatar} alt={user.name} />
          {user.name}
        </li>
      </ul>
    </nav>
  );
}