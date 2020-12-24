import React from 'react';
import Intro from '../../../videos/intro.mp4';
import { Button, Video, Content, Heading, Container } from './Cover.elements';

export default function Cover({ heading, btnText }) {
  return (
    <Container>
      <Video autoPlay muted loop playsInline>
        <source src={Intro} type="video/mp4" />
      </Video>
      <Content>
        <Heading>{heading}</Heading>
        <Button to="/about">{btnText}</Button>
      </Content>
    </Container>
  );
}
