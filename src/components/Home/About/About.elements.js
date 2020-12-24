import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  padding: 5rem 0;
  position: relative;
  overflow: hidden;

  @media only screen and (max-width: 40em) {
    & {
        justify-content: center;
    }
  }

  @media only screen and (max-width: 32.5em) {
    & {
        flex-direction: column;
        text-align: center;
    }
  }
`;
export const ColOne = styled.div`
  flex-basis: 33%;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 40em) {
    & {
        padding: 2rem;
    }
  }
`;
export const ColTwo = styled.div`
  flex-basis: 67%;

  @media only screen and (max-width: 40em) {
    & {
        padding: 2rem;
    }
  }
`;
export const ColThree = styled.div`
  flex-basis: 25%;

  @media only screen and (max-width: 40em) {
    & {
        display: none;
    }
  }
`;
export const Title = styled.h2`
  font-size: 4.5rem;
  text-transform: uppercase;
  color: #666666;
  display: flex;
  flex-direction: column;
  text-align: right;

  @media only screen and (max-width: 56em) {
    & {
      font-size: 3.5rem;
    }
  }
`;
export const Word = styled.span`
  &:not(:last-child) {
    margin-bottom: 2.5rem;
  }
`;

export const Paragraph = styled.p`
  color: #666666;
  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  @media only screen and (max-width: 56em) {
    & {
      font-size: 0.7rem;
    }
  }
`;

export const CircleOne = styled.div`
  background-color: #42f1f8;
  height: 10rem;
  width: 10rem;
  border-radius: 100rem;
  opacity: 0.9;
  position: absolute;
  top: 7%;
  right: 0;
  transform: scale(2.3);

  @media only screen and (max-width: 40em) {
    & {
        display: none;
    }
  }

  @media only screen and (max-width: 56em) {
    & {
      right: -10%;
      transform: scale(1.8);
    }
  }
`;

export const CircleTwo = styled.div`
  background-color: #320f51;
  height: 10rem;
  width: 10rem;
  border-radius: 100rem;
  opacity: 0.5;
  position: absolute;
  top: 55%;
  right: 8%;
  transform: translate(-5%, -55%) scale(1.2);

  @media only screen and (max-width: 56em) {
    & {
      right: 0%;
      transform: translate(-5%, -55%) scale(1.1);
    }
  }
  @media only screen and (max-width: 40em) {
    & {
        display: none;
    }
  }
`;

export const CircleThree = styled.div`
  background-color: #e91e7a;
  height: 10rem;
  width: 10rem;
  border-radius: 100rem;
  position: absolute;
  z-index: -1;
  right: -2%;
  bottom: 5%;
  transform: scale(1.7);

  @media only screen and (max-width: 56em) {
    & {
      right: -10%;
      transform: scale(1.4);
    }
  }
  @media only screen and (max-width: 40em) {
    & {
        display: none;
    }
  }
`;
