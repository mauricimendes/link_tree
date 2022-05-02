import React from "react"
import { ShoppingBag } from 'react-feather'

import { Container, Divider } from './styles'

const BoxInfo: React.FC = () => {
    return (
        <Container>
            <ShoppingBag color="#2F2F33" />
            <Divider />
            <div>
                <p>São <span>19 projetos</span></p>
                <p>disponíveis para você</p>
            </div>
        </Container>
    )
}

export default BoxInfo