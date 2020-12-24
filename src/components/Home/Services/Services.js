import React from 'react';
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
            ...GatsbyImageSharpFixed
          }
        }
      }
      DesktopTwo: file(relativePath: { eq: "Pencil.png" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      DesktopThree: file(relativePath: { eq: "Phone.png" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      MobileOne: file(relativePath: { eq: "Computer.png" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      MobileTwo: file(relativePath: { eq: "Pencil.png" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      MobileThree: file(relativePath: { eq: "Phone.png" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
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
      const sourcesTwo = [
        data.DesktopTwo.childImageSharp.fixed,
        {
          ...data.MobileTwo.childImageSharp.fixed,
          media: `(max-width: 900px)`,
        },
      ]
      const sourcesThree = [
        data.DesktopThree.childImageSharp.fixed,
        {
          ...data.MobileThree.childImageSharp.fixed,
          media: `(max-width: 900px)`,
        },
      ]
            
  return (
    <Container>
      <Row>
        <Col>
          <Title>{heading}</Title>
        </Col>
      </Row>
      <Row>
        <Col>
          <StyledImage fixed={sourcesOne} />
          <SubTitle>{subHeadingOne}</SubTitle>
          <Paragraph>{paragraphOne}</Paragraph>
        </Col>
        <Col>
          <StyledImage fixed={sourcesTwo} />
          <SubTitle>{subHeadingTwo}</SubTitle>
          <Paragraph>{paragraphTwo}</Paragraph>
        </Col>
        <Col>
          <StyledImage fixed={sourcesThree} />
          <SubTitle>{subHeadingThree}</SubTitle>
          <Paragraph>{paragraphThree}</Paragraph>
        </Col>
      </Row>
    </Container>
  );
}
