import styled from 'styled-components'

export const Container = styled.section`
    padding: 4rem 6rem;
    color: #666666;
`
export const Title = styled.h2`
    text-transform: uppercase;
    text-align: center;
`

export const Paragraph = styled.p`
    &:not(:last-child) {
        margin-bottom: 2rem;
    }
    line-height: 1.6rem;
`

export const Row = styled.div`
    display: flex;
`

export const Video = styled.video`
    height: 70vh;
`

export const Col = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
