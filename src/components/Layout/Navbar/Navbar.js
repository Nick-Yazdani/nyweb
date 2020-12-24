import React from 'react';
import Logo from '../../../svg/logo.svg';

import {
  Container,
  LogoContainer,
  Navigation,
  NavigationList,
  NavigationItem,
  NavigationLink,
  LogoLink,
  Hambgurger,
  HamburgerItem
} from './Navbar.elements';

export default function Navbar() {
  return (
    <Container>
      <LogoContainer>
        <LogoLink to="/">
          <Logo height={60} width={100} />
        </LogoLink>
      </LogoContainer>
      <Navigation>
          <NavigationList>
              <NavigationItem>
                  <NavigationLink to="/" activeClassName={`active`}>home</NavigationLink>
              </NavigationItem>
              <NavigationItem>
                  <NavigationLink to="/about" activeClassName={`active`}>about</NavigationLink>
              </NavigationItem>
              <NavigationItem>
                  <NavigationLink to="/portfolio" activeClassName={`active`}>portfolio</NavigationLink>
              </NavigationItem>
              <NavigationItem>
                  <NavigationLink to="/services" activeClassName={`active`}>services</NavigationLink>
              </NavigationItem>
              <NavigationItem>
                  <NavigationLink to="/contact" activeClassName={`active`}>contact</NavigationLink>
              </NavigationItem>
          </NavigationList>
          <Hambgurger>
              <HamburgerItem />
              <HamburgerItem />
              <HamburgerItem />
          </Hambgurger>
      </Navigation>
    </Container>
  );
}
