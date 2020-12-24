import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

export const Container = styled.section`
    @media only screen and (max-width: 42em) {
    & {
        display: flex;
        flex-direction: column;
    }
  }
`

export const Title = styled.h2`
    text-transform: uppercase;
    font-size: 1.3rem;
    padding: 1rem;
    padding-top: 2rem;

    @media only screen and (max-width: 56em) {
    & {
      font-size: 1rem;
    }
  }
`

export const Paragraph = styled.p`
    text-align: center;
    width: 60%;
    font-size: .9rem;
    padding: 2rem;

    @media only screen and (max-width: 56em) {
    & {
      font-size: .7rem;
      width: 100%;
    }
  }
`

export const StyledImage = styled((props) => <Img {...props} />)`

`

export const Row = styled.div`
    display: flex;
    justify-content: center;

    @media only screen and (max-width: 42em) {
    & {
        flex-direction: column;
        align-items: center;
    }
  }
`

export const ColOne = styled.div`
    flex-basis: 50%;
    display: flex;
    justify-content: flex-end;
    margin-right: 3rem;
    margin: 0;

    @media only screen and (max-width: 42em) {
    & {
        justify-content: center;
    }
  }
`

export const ColTwo = styled.div`
    flex-basis: 50%;
    display: flex;
    justify-content: flex-start;
    margin-left: 3rem;

       @media only screen and (max-width: 42em) {
    & {
        justify-content: center;
        margin: 0;
    }
       }
`