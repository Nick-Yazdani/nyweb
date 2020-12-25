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

  @media only screen and (max-width: 56em) {
    & {
      height: 13vh;
    }
  }
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
      display: none;
    }
  }
`;

export const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
`;

export const Hambgurger = styled.div`
  display: none;

  @media only screen and (max-width: 56em) {
    & {
      display: block;
      position: absolute;
      width: 30px;
      height: 23px;
      margin-right: 2rem;
      right: 0;
      cursor: pointer;
    }
  }
`;

export const HamburgerItem = styled.span`
  height: 2px;
  width: 30px;
  background-color: #fff;
  display: block;
  border-radius: 10rem;
  position: absolute;
  top: 10px;
  transition: all 0.3s;

  &.pressed {
    &::before {
      transform: rotate(-45deg);
      top: 0;
      background-color: #e91e7a;
    }
    &::after {
      transform: rotate(45deg);
      top: 0;
      background-color: #e91e7a;
    }
    & {
      background: none;
    }
  }

  &::before {
    content: '';
    height: 2px;
    width: 30px;
    background-color: #fff;
    display: block;
    border-radius: 10rem;
    position: absolute;
    top: -10px;
    transition: all 0.3s;
  }
  &::after {
    content: '';
    height: 2px;
    width: 30px;
    background-color: #fff;
    display: block;
    border-radius: 10rem;
    position: absolute;
    bottom: -10px;
    transition: all 0.3s;
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
  font-size: 0.8rem;
  transition: all 0.3s;

  &.active {
    color: #e91e7a;
  }

  &:hover {
    color: #e91e7a;
  }
`;

export const LogoLink = styled((props) => <Link {...props} />)``;

export const MobileNavigation = styled.nav`
  opacity: 0;
  transition: all 0.3s;
  position: absolute;
  z-index: 2;
  display: flex;
  left: 0;
  top: 100%;
  width: 100%;
  justify-content: center;
  pointer-events: none;

  @media only screen and (max-width: 56em) {
    &.pressed {
      opacity: 1;
      pointer-events: auto;
    }
  }
`;
export const MobileNavigationList = styled.ul`
  list-style: none;
  margin-top: 1rem;
  width: 90%;
`;
export const MobileNavigationListItem = styled.li`
  width: 100%;
  border-bottom: 1px solid #000;
  background-color: #320f51;
  transition: all 0.3s;

  &:hover {
    background-color: rgba(50, 15, 81, .7);
  }
`;
export const MobileNavigationLink = styled((props) => <Link {...props} />)`
  text-decoration: none;
  color: #fff;
  width: 100%;
  display: inline-block;
  padding: 2rem;
  text-transform: uppercase;
`;
