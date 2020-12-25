import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

export const Container = styled.header`
  background-color: #320f51;
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 1000;
  width: 100%;
`;

export const LogoContainer = styled.div`
  padding: 0.4rem;
  position: absolute;
  width: 30%;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 56em) {
    & {
      padding: 0;
    }
  }
`;

export const Navigation = styled.nav`
  flex-basis: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 56em) {
    & {
      justify-content: flex-end;
    }
  }
`;

export const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 56em) {
    & {
      display: none;
    }
  }
`;

export const Hambgurger = styled.div`
  display: none;

  @media only screen and (max-width: 56em) {
    & {
      display: block;
      margin-right: 2rem;
    }
  }
`;

export const HamburgerItem = styled.span`
  height: 1px;
  padding: 1px;
  width: 1.8rem;
  background-color: #fff;
  display: block;
  border-radius: 10rem;
  &:not(:last-child) {
    margin-bottom: 0.4rem;
  }
`;

export const NavigationItem = styled.li`
  &:not(:last-child) {
    margin-right: 4rem;
  }
`;

export const NavigationLink = styled((props) => <Link {...props} />)`
  text-decoration: none;
  color: #fff;
  text-transform: uppercase;
  font-size: .8rem;
  transition: all .3s;

  &.active {
    color: #e91e7a;
  }

  &:hover {
    color: #e91e7a;
  }
`;

export const LogoLink = styled((props) => <Link {...props} />)``;
