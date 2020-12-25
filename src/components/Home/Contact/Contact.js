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
  Form
} from './Contact.elements';

export default function Contact({ title, btnText, bgColor, titleColor }) {
  return (
    <Container bgColor={bgColor}>
      <Row>
        <Title titleColor={titleColor}>{title}</Title>
      </Row>
      <Form>
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
      </Form>
    </Container>
  );
}
