import React from 'react';
import styled, { keyframes } from 'styled-components';
import Img from 'gatsby-image';

const fadeInSlideFromLeft = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const fadeInSlideFromRight = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const fadeInMiddle = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const fadeInSlideFromTop = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const Container = styled.section`
  background-color: #666666;
  color: #fff;
  overflow: hidden;
`;
export const Title = styled.h2`
  text-transform: uppercase;
  padding: 3rem;
  font-size: 1.3rem;

  @media only screen and (max-width: 56em) {
    & {
      font-size: 1rem;
    }
  }
`;

export const SubTitle = styled.h3`
  text-transform: capitalize;
  font-weight: normal;
  margin-bottom: 1.5rem;

  @media only screen and (max-width: 56em) {
    & {
      font-size: 0.8rem;
    }
  }
`;

export const Paragraph = styled.p`
  text-align: center;
  width: 60%;
  font-size: 0.9rem;
  line-height: 1.5rem;
  margin-bottom: 3rem;

  @media only screen and (max-width: 42em) {
    & {
      width: 100%;
      padding: 0 1rem;
    }
  }

  @media only screen and (max-width: 56em) {
    & {
      font-size: 0.7rem;
      line-height: 1.2rem;
    }
  }
`;

export const Col = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 33%;
  @media only screen and (max-width: 42em) {
    & {
      width: 100%;
    }
  }

  &.animated {
    animation: ${fadeInSlideFromTop} 1s linear;
  }

  &.start {
    animation: ${fadeInSlideFromLeft} 1s linear;
  }

  &.middle {
    animation: ${fadeInMiddle} 1s linear;
  }
  &.end {
    animation: ${fadeInSlideFromRight} 1s linear;
  }
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  @media only screen and (max-width: 42em) {
    & {
      flex-direction: column;
    }
  }
`;
export const StyledImage = styled((props) => <Img {...props} />)`
  max-width: 150px;
  max-height: 150px;
  margin-bottom: 1.3rem;
`;
