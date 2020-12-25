import React, { useRef } from 'react';
import useScrollDetect from '../../../hooks/useScrollDetect';
import {
  Container,
  Title,
  Col,
  Row,
  StyledImage,
  SubTitle,
  Paragraph,
} from './Services.elements';
import { graphql, useStaticQuery } from 'gatsby';

export default function Services({
  heading,
  subHeadingOne,
  subHeadingTwo,
  subHeadingThree,
  paragraphOne,
  paragraphTwo,
  paragraphThree,
}) {
  const data = useStaticQuery(graphql`
    query {
      DesktopOne: file(relativePath: { eq: "Computer.png" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      DesktopTwo: file(relativePath: { eq: "Pencil.png" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      DesktopThree: file(relativePath: { eq: "Phone.png" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      MobileOne: file(relativePath: { eq: "Computer.png" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      MobileTwo: file(relativePath: { eq: "Pencil.png" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      MobileThree: file(relativePath: { eq: "Phone.png" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed_withWebp
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
  ];
  const sourcesTwo = [
    data.DesktopTwo.childImageSharp.fixed,
    {
      ...data.MobileTwo.childImageSharp.fixed,
      media: `(max-width: 900px)`,
    },
  ];
  const sourcesThree = [
    data.DesktopThree.childImageSharp.fixed,
    {
      ...data.MobileThree.childImageSharp.fixed,
      media: `(max-width: 900px)`,
    },
  ];

  const containerRef = useRef(null);

  const scrolledPast = useScrollDetect(containerRef);

  return (
    <Container ref={containerRef}>
      <Row>
        <Col className={scrolledPast ? "animated" : ""}>
          <Title>{heading}</Title>
        </Col>
      </Row>
      <Row>
        <Col className={scrolledPast ? "start" : ""}>
          <StyledImage fixed={sourcesOne} />
          <SubTitle>{subHeadingOne}</SubTitle>
          <Paragraph>{paragraphOne}</Paragraph>
        </Col>
        <Col className={scrolledPast ? "middle" : ""}>
          <StyledImage fixed={sourcesTwo} />
          <SubTitle>{subHeadingTwo}</SubTitle>
          <Paragraph>{paragraphTwo}</Paragraph>
        </Col>
        <Col className={scrolledPast ? "end" : ""}>
          <StyledImage fixed={sourcesThree} />
          <SubTitle>{subHeadingThree}</SubTitle>
          <Paragraph>{paragraphThree}</Paragraph>
        </Col>
      </Row>
    </Container>
  );
}
