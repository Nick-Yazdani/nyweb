import styled from 'styled-components'

export const Container = styled.section`
    padding: 4rem 6rem;
    color: #666666;

    @media only screen and (max-width: 50em) {
    & {
      padding: 4rem 1rem;
    }
  }
`
export const Title = styled.h2`
    text-transform: uppercase;
    text-align: center;

    @media only screen and (max-width: 56em) {
    & {
      margin-bottom: 2rem;
    }
  }
`

export const Paragraph = styled.p`
    &:not(:last-child) {
        margin-bottom: 2rem;
    }
    line-height: 1.6rem;
`

export const Row = styled.div`
    display: flex;

    @media only screen and (max-width: 50em) {
    & {
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
    }
  }
`

export const Video = styled.video`
    width: 30%;
    height: auto;

    @media only screen and (max-width: 56em) {
    & {
      width: 40%;
    }
  }
`

export const Col = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 50em) {
    & {
      text-align: center;
    }
  }
`
