import React, { Fragment } from 'react'

import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

import { createGlobalStyle } from 'styled-components'

import "fontsource-montserrat"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
      font-family: 'Montserrat', sans-serif;
  }
`

export default function Layout({ children }) {
    return (
        <Fragment>
            <GlobalStyle />
            <Navbar />
            {children}
            <Footer />
        </Fragment>
    )
}
