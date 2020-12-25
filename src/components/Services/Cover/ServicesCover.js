import React from 'react';
import StyledBackground from './Background/Background';
import { Container, Title } from './ServicesCover.elements';
import { LinkButton } from '../../Global/index';

export default function Cover({ heading, btnText }) {
  return (
    <StyledBackground>
      <Container>
          <Title>{heading}</Title>
          <LinkButton>{btnText}</LinkButton>
      </Container>
    </StyledBackground>
  );
}
