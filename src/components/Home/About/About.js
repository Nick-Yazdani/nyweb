import React, { useRef } from 'react';
import useScrollDetect from '../../../hooks/useScrollDetect';
import { useStaticQuery, graphql } from 'gatsby';


import {
  Container,
  ColOne,
  ColTwo,
  ColThree,
  Word,
  Title,
  Paragraph,
  StyledImage,
} from './About.elements';

export default function About({
  paragraphOne,
  paragraphTwo,
  paragraphThree,
  words,
}) {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "circles.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const containerRef = useRef(null);

  const scrolledPast = useScrollDetect(containerRef);

  return (
    <Container ref={containerRef}>
      <ColOne className={scrolledPast ? "animated" : ""}>
        <Title>
          {words.map((word) => {
            return <Word key={word.word}>{word.word}</Word>;
          })}
        </Title>
      </ColOne>
      <ColTwo className={scrolledPast ? "animated" : ""}>
        <Paragraph>{paragraphOne}</Paragraph>
        <Paragraph>{paragraphTwo}</Paragraph>
        <Paragraph>{paragraphThree}</Paragraph>
      </ColTwo>
      <ColThree className={scrolledPast ? "animated" : ""}>
        <StyledImage fluid={data.file.childImageSharp.fluid} />
      </ColThree>
    </Container>
  );
}
