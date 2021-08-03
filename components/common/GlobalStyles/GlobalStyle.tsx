import { createGlobalStyle } from 'styled-components';

import { DEVICE_SIZE } from '@constants/device-size.constant';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    height: 100%;
    font-size: 62.5%;
    box-sizing: border-box;

    @media screen and (max-width: ${DEVICE_SIZE.laptop}) {
      font-size: 56.25%;
    }

    @media screen and (max-width: ${DEVICE_SIZE.mobileM}) {
      font-size: 40%;
    }
  }

  body {
    font-family: 'Karla',-apple-system, BlinkMacSystemFont, sans-serif;
		font-size: 1.6rem;
  }

  a,
  a:link,
  a:hover,
  a:focus {
    color: currentColor;
    text-decoration: none;
    cursor: pointer;
  }

  p {
    line-height: 161%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat Alternates',-apple-system, BlinkMacSystemFont, sans-serif;
  }

  h1 {
    font-size: 5.6rem;
  }

  h2 {
    font-size: 4rem;
  }

  h3 {
    font-size: 3.6rem;
  }

  h4 {
    font-size: 2.8rem;
  }

  h5 {
    font-size: 2rem;
  }

  h6 {
    font-size: 1.2rem;
  }

  p {
    font-size: 1.8rem;
  }
`;

export default GlobalStyle;
