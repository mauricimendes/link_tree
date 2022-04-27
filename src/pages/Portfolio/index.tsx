import React from "react"

import { Container } from './styles'
import background from '../../assets/emmanutencao.png'

const Portfolio: React.FC = () => {
    return (
        <Container>
            <img src={background} />
            <div>
                <h1>Portfólio</h1>
                <p>Estamos em <span>manutenção.</span></p>
            </div>
        </Container>
    )
}

export default Portfolio