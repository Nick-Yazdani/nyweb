import React from 'react';
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import {
  ForFontAwesomeLink,
  Container,
  Row,
  Catchphrase,
  MainStyledLink,
  BottomLink,
  List,
  ListItem,
  Col,
  StyledFontAwesomeIcon,
} from './Footer.elements';

export default function Footer() {
  return (
    <Container>
      <Row>
        <Col>
          <Catchphrase>It's your move.</Catchphrase>
          <MainStyledLink to="/contact">get in touch</MainStyledLink>
        </Col>
        <Col>
            <ForFontAwesomeLink to="#">
              <StyledFontAwesomeIcon
                icon={faFacebookSquare}
                color="#3b5998"
                size={`4x`}
              />
            </ForFontAwesomeLink>
            <ForFontAwesomeLink to="#">
              <StyledFontAwesomeIcon
                icon={faTwitterSquare}
                color="#00aced"
                size={`4x`}
              />
            </ForFontAwesomeLink>
            <ForFontAwesomeLink to="#">
              <StyledFontAwesomeIcon
                icon={faInstagramSquare}
                color="#ea2c59"
                size={`4x`}
              />
            </ForFontAwesomeLink>
            <ForFontAwesomeLink to="#">
              <StyledFontAwesomeIcon
                icon={faLinkedin}
                color="#007bb6"
                size={`4x`}
              />
            </ForFontAwesomeLink>
        </Col>
      </Row>
      <List>
        <ListItem>
          <BottomLink to="/">home</BottomLink>
        </ListItem>
        <ListItem>
          <BottomLink to="/about">about</BottomLink>
        </ListItem>
        <ListItem>
          <BottomLink to="/portfolio">portfolio</BottomLink>
        </ListItem>
        <ListItem>
          <BottomLink to="/services">services</BottomLink>
        </ListItem>
      </List>
    </Container>
  );
}
