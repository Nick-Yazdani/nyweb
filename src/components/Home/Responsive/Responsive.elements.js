import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

export const Container = styled.section`
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
    }
  }
`

export const StyledImage = styled((props) => <Img {...props} />)`
    @media only screen and (max-width: 56em) {
    & {
      width: 20%;
    }
  }
`

export const Row = styled.div`
    display: flex;
    justify-content: center;
`

export const ColOne = styled.div`
    flex-basis: 50%;
    display: flex;
    justify-content: flex-end;
    margin-right: 3rem;
`

export const ColTwo = styled.div`
    flex-basis: 50%;
    display: flex;
    justify-content: flex-start;
    margin-left: 3rem;
`