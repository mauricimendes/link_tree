import React from "react"

import { Container } from './styles'

import image from '../../assets/regular.png'

interface IRegularRow {
    title: string
    description: string
    color: string
}

const RegularRow: React.FC<IRegularRow> = ({ title, description, color }) => {
    return (
        <Container color={color}>
            <span />
            <img src={image} alt="Logo Projeto" />

            <section>
                <h1>{title}</h1>
                <p>{description}</p>
            </section>
        </Container>
    )
}

export default RegularRow