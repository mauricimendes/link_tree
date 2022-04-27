import React, { ButtonHTMLAttributes } from "react"

import { ShoppingBag } from 'react-feather'

import { Container } from './styles'
import arrow from '../../assets/black_arrow.svg'

type IButton = ButtonHTMLAttributes<HTMLButtonElement> & {}

const PrincipalButton: React.FC<IButton> = ({ ...rest }) => {
    return (
        <Container { ...rest }>
            <div>
                <ShoppingBag />
                <p>Portfólio</p>
            </div>
            <span>
                <img src={arrow} />
            </span>
        </Container>
    )
}

export default PrincipalButton