import React from 'react';
import { Container, Title, Paragraph, Row, Video, Col } from './More.elements';

export default function More({ title, paragraphs, video }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Row>
          <Col>
        {paragraphs.map((paragraph) => {
          return (
            <Paragraph key={paragraph.paragraph}>
              {paragraph.paragraph}
            </Paragraph>
          );
        })}
        </Col>
        <Video autoPlay muted loop playsInline>
          <source src={video} type="video/mp4" />
        </Video>
      </Row>
    </Container>
  );
}
