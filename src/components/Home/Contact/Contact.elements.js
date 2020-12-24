import styled from 'styled-components';

export const Container = styled.section`
  padding: 2rem 5rem;

  @media only screen and (max-width: 26em) {
    & {
      padding: 2rem 1rem;
    }
  }
`;

export const Form = styled.form`
`

export const Title = styled.h2`
  margin-bottom: 0.4rem;
  font-size: 1.3rem;

    @media only screen and (max-width: 37.5em) {
    & {
      text-align: center;
    }
  }  
`;
export const NameInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  background-color: #eeeeee;
  border: none;
  outline: none;
  margin-bottom: 1.5rem;

  font-family: 'Montserrat', sans-serif;

  &::placeholder {
    font-family: 'Montserrat', sans-serif;
  }
`;
export const EmailPhone = styled.input`
  width: 100%;
  padding: 0.8rem;
  background-color: #eeeeee;
  border: none;
  outline: none;
  font-family: 'Montserrat', sans-serif;

  &::placeholder {
    font-family: 'Montserrat', sans-serif;
  }
`;
export const Message = styled.textarea`
  width: 100%;
  height: 24vh;
  resize: none;
  padding: 0.8rem;
  background-color: #eeeeee;
  border: none;
  outline: none;
  font-family: 'Montserrat', sans-serif;
  &::placeholder {
    font-family: 'Montserrat', sans-serif;
  }
`;
export const Button = styled.button`
  border: none;
  outline: none;
  background-color: #320f51;
  display: inline-block;
  padding: 1.2rem 1.8rem;
  font-size: 0.8rem;
  text-transform: uppercase;
  text-decoration: none;
  color: #fff;
  position: relative;
  border-radius: 3px;
  transition: all 0.3s;
  margin-left: auto;
  cursor: pointer;

  &::after {
    content: '';
    background-color: #320f51;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.3s;
    border-radius: 3px;
  }

  &:hover {
    &::after {
      transform: scale(1.7);
      opacity: 0;
    }
  }

  @media only screen and (max-width: 37.5em) {
    & {
      margin: 0 auto;
      width: 100%;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
  &:first-child {
    margin-bottom: 0.5rem;
  }

  @media only screen and (max-width: 37.5em) {
    & {
      flex-direction: column;
    }
  }
`;

export const Col = styled.div`
  width: 50%;
  &:not(:last-child) {
    margin-right: 2rem;
  }
  @media only screen and (max-width: 37.5em) {
    & {
      width: 100%;
      &:not(:last-child) {
        margin-bottom: 2rem;
      }
    }
  }
`;
