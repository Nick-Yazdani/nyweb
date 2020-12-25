import styled from 'styled-components';

export const Container = styled.section`
    color: #666666;
    padding: 3rem;
`

export const Title = styled.h2`
    text-transform: uppercase;
    font-size: 3rem;
    padding: 3rem;
    text-align: center;

    @media only screen and (max-width: 56em) {
    & {
      font-size: 3rem;
    }
  }
`

export const Paragraph = styled.p`
    font-size: 1.5rem;
    line-height: 3rem;
    text-align: center;
    width: 75%;
    margin: 0 auto;
    padding-bottom: 5rem;
    margin-bottom: 3rem;

    @media only screen and (max-width: 56em) {
    & {
      font-size: 1.3rem;
      line-height: 3rem;
    }
  }
` 