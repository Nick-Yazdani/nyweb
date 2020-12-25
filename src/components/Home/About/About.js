import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'

import {
  Container,
  ColOne,
  ColTwo,
  ColThree,
  Word,
  Title,
  Paragraph,
  StyledImage
} from './About.elements';

export default function About({ paragraphOne, paragraphTwo, paragraphThree, words }) {
    const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "circles.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }`)
  return (
    <Container>
      <ColOne>
        <Title>
            {words.map(word => {
                return <Word key={word.word}>{word.word}</Word>
            })}
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
            <StyledImage fluid={data.file.childImageSharp.fluid} />
      </ColThree>
    </Container>
  );
}
