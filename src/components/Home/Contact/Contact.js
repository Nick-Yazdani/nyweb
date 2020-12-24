import React from 'react';
import {
  Container,
  Title,
  NameInput,
  EmailPhone,
  Message,
  Button,
  Row,
  Col,
} from './Contact.elements';

export default function Contact({ title, btnText }) {
  return (
    <Container>
      <Row>
        <Title>{title}</Title>
      </Row>
      <Row>
        <NameInput placeholder="Name" />
      </Row>
      <Row>
        <Col>
          <EmailPhone placeholder="Email Address" />
        </Col>
        <Col>
          <EmailPhone placeholder="Contact Number" />
        </Col>
      </Row>
      <Row>
        <Message placeholder="Message" />
      </Row>
      <Row>
        <Button>{btnText}</Button>
      </Row>
    </Container>
  );
}
