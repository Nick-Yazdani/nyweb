import React from 'react'
import { Container, Title, Paragraph } from './Ethos.elements'

export default function Ethos({ title, paragraph }) {
    return (
        <Container>
            <Title>{title}</Title>
            <Paragraph>{paragraph}</Paragraph>
        </Container>
    )
}
