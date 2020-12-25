import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'gatsby';

const headingAnimation = keyframes`
  0% {
    transform: translateX(-100%);
  }

  80% {
    transform: translateX(30%);
  }

  100% {
    transform: translateX(0);
  }
`;

const btnAnimation = keyframes`
  0% {
    transform: translateX(200%);
  }

  80% {
    transform: translateX(-50%);
  }

  100% {
    transform: translateX(0);
  }
`;

export const Video = styled.video`
  height: 100vh;
  width: 100%;
  object-fit: fill;
`;

export const Content = styled.div`
  position: absolute;
  top: 65%;
  left: 30%;
  color: #fff;
  transform: translate(-30%, -65%);

  @media only screen and (max-width: 25em) {
  & {
    text-align: center;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -60%);
    width: 80%;
  }
}
`;

export const Heading = styled.h1`
  text-transform: uppercase;
  font-size: 1.7rem;
  margin-bottom: 2rem;
  text-align: left;
  line-height: 2.7rem;
  animation: ${headingAnimation} 2s ease-in-out;

  @media only screen and (max-width: 25em) {
    & {
      font-size: 1.3rem;
    }   
  }
`;

export const Button = styled((props) => <Link {...props} />)`
  background-color: #320f51;
  display: inline-block;
  padding: 1.2rem;
  font-size: 0.7rem;
  text-transform: uppercase;
  text-decoration: none;
  color: #fff;
  position: relative;
  border-radius: 3px;
  transition: all 0.3s;

  animation: ${btnAnimation} 2s ease-in-out;


  &::after {
    content: '';
    background-color: #320f51;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.3s;
    border-radius: 3px;
  }

  &:hover {
    &::after {
      transform: scale(1.5);
      opacity: 0;
    }
  }
`;

export const Container = styled.section`
  position: relative;
`;

