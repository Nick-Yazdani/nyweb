import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Button = styled((props) => <Link {...props} />)`
  background-color: #320f51;
  display: inline-block;
  padding: 1.1rem 1.4rem;
  font-size: 0.7rem;
  text-transform: uppercase;
  text-decoration: none;
  color: #fff;
  position: relative;
  border-radius: 3px;
  transition: all 0.3s;

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
      z-index: 1;
    }
  }
`;

export default function LinkButton({ children, to }) {
    return <Button to={to}>{children}</Button>
}