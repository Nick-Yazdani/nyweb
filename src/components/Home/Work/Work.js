import React from 'react';

import {
  Container,
  StyledCarouselProvider,
  StyledSlider,
  StyledSlide,
  StyledDot,
  StyledImage,
  Title,
  DotContainer,
} from './Work.elements';

export default function Work({ heading, sliders }) {
  return (
    <Container>
      <StyledCarouselProvider
        naturalSlideHeight={48}
        naturalSlideWidth={100}
        totalSlides={5}
      >
        <StyledSlider>
          <StyledSlide index={0}>
            <Title>{heading}</Title>
            <StyledImage src={sliders[0].image} />
          </StyledSlide>
          <StyledSlide index={1}>
            <StyledImage src={sliders[1].image} />
          </StyledSlide>
          <StyledSlide index={2}>
            <StyledImage src={sliders[2].image} />
          </StyledSlide>
          <StyledSlide index={3}>
            <StyledImage src={sliders[3].image} />
          </StyledSlide>
          <StyledSlide index={4}>
            <StyledImage src={sliders[4].image} />
          </StyledSlide>
        </StyledSlider>
        <DotContainer>
          <StyledDot slide={0} />
          <StyledDot slide={1} />
          <StyledDot slide={2} />
          <StyledDot slide={3} />
          <StyledDot slide={4} />
        </DotContainer>
      </StyledCarouselProvider>
    </Container>
  );
}
