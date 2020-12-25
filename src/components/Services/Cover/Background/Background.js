import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import BackgroundImage from 'gatsby-background-image';

const MainBackground = ({ className, children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "typing.jpg" }) {
          childImageSharp {
            fluid(quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );
  
  const imageData = data.file.childImageSharp.fluid;

  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={imageData}
      backgroundColor={`#040e18`}
    >
      {children}
    </BackgroundImage>
  );
};

const StyledBackground = styled(MainBackground)`
  height: 100vh;
  width: 100%;
  background-position: center;
  background-repeat: repeat-y;
  background-size: cover;
  background-attachment: fixed;
`;

export default StyledBackground;
