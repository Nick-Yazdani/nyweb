import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

export const Video = styled.video`
  height: 100vh;
  width: 100%;
  object-fit: fill;
`;

export const Content = styled.div`
    position: absolute;
    top: 65%;
    left: 30%;
    color: #fff;
    transform: translate(-30%, -65%);
`;

export const Heading = styled.h1`
    text-transform: uppercase;
    font-size: 1.7rem;
    margin-bottom: 2rem;
`;

export const Button = styled((props) => <Link {...props} />)`
    background-color: #320f51;
    display: inline-block;
    padding: 1.2rem;
    font-size: .7rem;
    text-transform: uppercase;
    text-decoration: none;
    color: #fff;
    position: relative;
    border-radius: 3px;
    transition: all .3s; 

    &::after {
        content: "";
        background-color: #320f51;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;  
        transition: all .3s; 
        border-radius: 3px;
    }

    &:hover {
        &::after {
            transform: scale(1.5);
            opacity: 0;
        }
    }
`;

export const Container = styled.section`
    position: relative;
`
