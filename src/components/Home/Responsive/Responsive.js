import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import {
  Container,
  Title,
  Paragraph,
  StyledImage,
  ColOne,
  ColTwo,
  Row,
} from './Responsive.elements';

export default function Responsive({ heading, paragraph }) {
  const data = useStaticQuery(graphql`
    query {
      DesktopOne: file(relativePath: { eq: "mac.png" }) {
        childImageSharp {
          fixed(width: 300, height: 300) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
      DesktopTwo: file(relativePath: { eq: "phone_two.png" }) {
        childImageSharp {
          fixed(width: 300, height: 300) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
      MobileOne: file(relativePath: { eq: "mac.png" }) {
        childImageSharp {
          fixed(width: 220, height: 220) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
      MobileTwo: file(relativePath: { eq: "phone_two.png" }) {
        childImageSharp {
          fixed(width: 220, height: 220) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  `);

const sourcesOne = [
    data.DesktopOne.childImageSharp.fixed,
    {
      ...data.MobileOne.childImageSharp.fixed,
      media: `(max-width: 900px)`,
    },
  ]
  const SourcesTwo = [
    data.DesktopTwo.childImageSharp.fixed,
    {
      ...data.MobileTwo.childImageSharp.fixed,
      media: `(max-width: 900px)`,
    },
  ]
  return (
    <Container>
      <Row>
        <Title>{heading}</Title>
      </Row>
      <Row>
        <Paragraph>{paragraph}</Paragraph>
      </Row>
      <Row>
        <ColOne>
          <StyledImage fixed={sourcesOne} />
        </ColOne>
        <ColTwo>
          <StyledImage fixed={SourcesTwo} />
        </ColTwo>
      </Row>
    </Container>
  );
}
