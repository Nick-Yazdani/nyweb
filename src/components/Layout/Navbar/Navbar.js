import React, { useState } from 'react';
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
  HamburgerItem,
  MobileNavigation,
  MobileNavigationList,
  MobileNavigationListItem,
  MobileNavigationLink
} from './Navbar.elements';

export default function Navbar() {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressed = () => {
      if(isPressed) {
          setIsPressed(false)
      }
      else if (!isPressed) {
          setIsPressed(true)
      }
  }
  
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
            <NavigationLink to="/" activeClassName={`active`}>
              home
            </NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink to="/about" activeClassName={`active`}>
              about
            </NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink to="/portfolio" activeClassName={`active`}>
              portfolio
            </NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink to="/services" activeClassName={`active`}>
              services
            </NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink to="/contact" activeClassName={`active`}>
              contact
            </NavigationLink>
          </NavigationItem>
        </NavigationList>
      </Navigation>
      <MobileNavigation className={isPressed ? `pressed` : ``}>
          <MobileNavigationList>
              <MobileNavigationListItem>
                  <MobileNavigationLink to="/">home</MobileNavigationLink>
              </MobileNavigationListItem>
              <MobileNavigationListItem>
                  <MobileNavigationLink to="/about">about</MobileNavigationLink>
              </MobileNavigationListItem>
              <MobileNavigationListItem>
                  <MobileNavigationLink to="/portfolio">portfolio</MobileNavigationLink>
              </MobileNavigationListItem>
              <MobileNavigationListItem>
                  <MobileNavigationLink to="/services">services</MobileNavigationLink>
              </MobileNavigationListItem>
              <MobileNavigationListItem>
                  <MobileNavigationLink to="/contact">contact</MobileNavigationLink>
              </MobileNavigationListItem>
          </MobileNavigationList>
      </MobileNavigation>
      <Hambgurger onClick={handlePressed}>
          <HamburgerItem className={isPressed ? `pressed` : ``} />
        </Hambgurger>
    </Container>
  );
}
