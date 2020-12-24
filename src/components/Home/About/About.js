import React from 'react';
import {
  Container,
  ColOne,
  ColTwo,
  ColThree,
  Word,
  Title,
  Paragraph,
  CircleOne,
  CircleTwo,
  CircleThree
} from './About.elements';

export default function About({ paragraphOne, paragraphTwo, paragraphThree }) {
  return (
    <Container>
      <ColOne>
        <Title>
            <Word>who</Word>
            <Word>are</Word>
            <Word>we?</Word>
        </Title>
      </ColOne>
      <ColTwo>
        <Paragraph>
            {paragraphOne}
        </Paragraph>
        <Paragraph>
            {paragraphTwo}
        </Paragraph>
        <Paragraph>
            {paragraphThree}
        </Paragraph>
      </ColTwo>
      <ColThree>
        <CircleOne />
        <CircleTwo />
        <CircleThree />
      </ColThree>
    </Container>
  );
}
