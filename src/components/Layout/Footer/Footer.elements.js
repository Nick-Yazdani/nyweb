import styled from 'styled-components';
import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Container = styled.footer`
background-color: #000;
`

export const Catchphrase = styled.h2`
    color: #fff;
    font-size: 2.5rem;
    font-weight: normal;
    margin-bottom: .5rem;

    @media only screen and (max-width: 56em) {
    & {
      font-size: 2rem;
    }
  }
`

export const MainStyledLink = styled((props) => <Link {...props} />)`
    margin-top: .75rem;
    text-transform: uppercase;
    text-decoration: none;
    font-size: .8rem;
    color: #fff;
    transition: all .3s;
    &:hover {
        color: #e91e7a;
    }
`

export const Row = styled.div`
    padding: 5rem;
    display: flex;
`

export const List = styled.ul`
    display: flex;
    list-style: none;
    justify-content: center;
`

export const ListItem = styled.li`
    padding: .8rem;
    margin: 1rem;
`

export const BottomLink = styled((props) => <Link {...props} />)`
    text-transform: uppercase;
    text-decoration: none;
    color: #fff;
    transition: all .3s;
    &:hover {
        color: #e91e7a;
    }

    @media only screen and (max-width: 56em) {
    & {
      font-size: .9rem;
    }
  }
`
export const Col = styled.div`
    &:last-child {
        margin-left: auto;
    }
`

export const ForFontAwesomeLink = styled((props) => <Link {...props} />)`
    display: inline-block;
    position: relative;
    &:not(:last-child) {
        margin-right: 1rem;
    }
    @media only screen and (max-width: 56em) {
    & {
      font-size: .7rem;
    }
  }
`
export const StyledFontAwesomeIcon = styled((props) => <FontAwesomeIcon {...props} />)`
    z-index: 2;
    position: relative;
`
export const StyledFontAwesomeCircle = styled((props) => <FontAwesomeIcon {...props} />)`
    z-index: 1;
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: 3.5rem;
`