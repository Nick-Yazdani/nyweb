import styled from 'styled-components'
import React from 'react'
import { CarouselProvider, Slider, Slide, Dot, Image } from 'pure-react-carousel';

import 'pure-react-carousel/dist/react-carousel.es.css';

export const Container = styled.section`
`

export const StyledCarouselProvider = styled((props) => <CarouselProvider {...props} />)`
    position: relative;
`
export const StyledSlider = styled((props) => <Slider {...props} />)`
`
export const StyledSlide = styled((props) => <Slide {...props} />)`
    background-color: #e91e7a;
`
export const StyledDot = styled((props) => <Dot {...props} />)`
    outline: none;
    border: none;
    padding: .3rem;
    border-radius: 10rem;
    background-color: #000;

    &:not(:last-child) {
        margin-right: .8rem;
    }

    &.carousel__dot--selected {
        opacity: .2;
    }
`
export const StyledImage = styled((props) => <Image {...props} />)`
    width: 40%;
    height: 50%;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
`

export const Title = styled.h2`
    text-transform: uppercase;
    padding: 3rem;
    font-size: 1.3rem;
    text-align: center;
    color: #fff;
    @media only screen and (max-width: 56em) {
    & {
      font-size: 1rem;
    }
  }
`
export const DotContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 1.4rem;
`