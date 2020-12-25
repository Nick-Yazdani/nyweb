import React from 'react';
import { Button, Video, Content, Heading, Container } from './Cover.elements';

export default function Cover({ heading, btnText, video, path }) {
  return (
    <Container>
      <Video autoPlay muted loop playsInline>
        <source src={video} type="video/mp4" />
      </Video>
      <Content>
        <Heading>{heading}</Heading>
        <Button to={path}>{btnText}</Button>
      </Content>
    </Container>
  );
}
