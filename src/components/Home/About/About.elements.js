import styled from 'styled-components';
import React from 'react'
import Img from 'gatsby-image'

export const Container = styled.section`
  display: flex;
  align-items: center;
  padding: 5rem 0;
  position: relative;
  overflow: hidden;
  justify-content: center;

  @media only screen and (max-width: 40em) {
    & {
        justify-content: center;
    }
  }

  @media only screen and (max-width: 32.5em) {
    & {
        flex-direction: column;
        text-align: center;
    }
  }
`;
export const ColOne = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 33%;
  @media only screen and (max-width: 40em) {
    & {
        padding: 2rem;
        width: 100%;
        justify-content: center;
    }
  }

  
`;
export const ColTwo = styled.div`
  padding: 1rem;
  width: 38%;
  margin-left: 3rem;
  @media only screen and (max-width: 40em) {
    & {
        padding: 2rem;
        width: 100%;
        margin: 0;
    }
  }
`;
export const ColThree = styled.div`
width: 24%;
  @media only screen and (max-width: 40em) {
    & {
        display: none;
    }
  }
`;
export const Title = styled.h2`
  font-size: 4.5rem;
  text-transform: uppercase;
  color: #666666;
  display: flex;
  flex-direction: column;
  text-align: right;

  @media only screen and (max-width: 56em) {
    & {
      font-size: 3.5rem;
    }
  }

  @media only screen and (max-width: 40em) {
    & {
        text-align: center;
        justify-content: center;
        align-items: center;
    }
  }
`;
export const Word = styled.span`
  &:not(:last-child) {
    margin-bottom: 2.5rem;
  }
`;

export const Paragraph = styled.p`
  color: #666666;
  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  @media only screen and (max-width: 56em) {
    & {
      font-size: .9rem;
    }
  }
`;

export const StyledImage = styled((props) => <Img {...props} />)`
    position: absolute;
    transform: translateX(50%) scale(1.5);
`