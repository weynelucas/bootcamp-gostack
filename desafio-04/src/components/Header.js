import React, { Component } from 'react';

import './Header.css';
import logo from '../assets/logo.svg'

export default class Header extends Component {
  render() {
    return (
      <nav>
        <img src={logo} alt="Facebook" />
        <ul>
          <li>Meu perfil</li>
        </ul>
      </nav>
    );
  }
}