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
  Form,
  BudgetContainer,
  BudgetItemTitle,
  BudgetItem,
  BudgetItemSelection
} from './Contact.elements';

export default function Contact({ title, btnText }) {
  return (
    <Container>
      <Row>
        <Title>{title}</Title>
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
          <BudgetContainer>
              <BudgetItemTitle>Expected Budget</BudgetItemTitle>
              <BudgetItem><BudgetItemSelection type="radio" name="budget" /> $800 - $3000</BudgetItem>
              <BudgetItem><BudgetItemSelection type="radio" name="budget" /> $3000 - $5000</BudgetItem>
              <BudgetItem><BudgetItemSelection type="radio" name="budget" /> $5000 - $10,000</BudgetItem>
              <BudgetItem><BudgetItemSelection type="radio" name="budget" /> $10,000+</BudgetItem>
          </BudgetContainer>
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
