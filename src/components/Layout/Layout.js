import React, { Fragment } from 'react';

import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

import { createGlobalStyle } from 'styled-components';

import 'fontsource-montserrat';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
      font-family: 'Montserrat', sans-serif;

      &::-webkit-scrollbar {
          width: 12px;
      }

      scrollbar-width: thin;
      scrollbar-color: #90A4AE #CFD8DC;

      &::-webkit-scrollbar-track {
          background: #CFD8DC;
      }

      &::-webkit-scrollbar-thumb {
        background-color: #90A4AE;
        border-radius: 6px;
        border: 3px solid #CFD8DC;
    }
  }
`;

export default function Layout({ children }) {
  return (
    <Fragment>
      <GlobalStyle />
      <Navbar />
      {children}
      <Footer />
    </Fragment>
  );
}
