import React from 'react';
import { LinkButton } from '../../Global/index';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import {
  Container,
  Title,
  ImgContainer,
  ButtonContainer,
} from './Call.elements';

export default function Call({ title, path, btnText }) {
  const data = useStaticQuery(graphql`
    query {
      DesktopOne: file(relativePath: { eq: "computers_about.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      MobileOne: file(relativePath: { eq: "computers_about.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const sources = [
    data.DesktopOne.childImageSharp.fluid,
    {
      ...data.MobileOne.childImageSharp.fluid,
      media: `(max-width: 900px)`,
    },
  ];

  return (
    <Container>
      <Title>{title}</Title>
      <ImgContainer>
        <Img fluid={sources} />
      </ImgContainer>
      <ButtonContainer>
        <LinkButton to={path}>{btnText}</LinkButton>
      </ButtonContainer>
    </Container>
  );
}
