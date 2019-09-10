import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

import background from '../assets/images/background.svg';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #191920 url(${background}) no-repeat center top;
    -webkit-font-smoothing: antialiased;
  }

  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px
  }

  body, input, button, .Toastify__toast-body {
    font-size: 14px;
    font-family: Roboto, sans-serif;
  }

  .Toastify__toast {
    border-radius: 4px !important;
  }

  .Toastify__toast-body {
    font-size: 16px;
  }
`;
