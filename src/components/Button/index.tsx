import React, { ButtonHTMLAttributes } from 'react'

import arrow from '../../assets/white_arrow.svg'
import { Container } from './styles'

type IButton = ButtonHTMLAttributes<HTMLButtonElement> & {
    color: string
    title: string
}

const Button: React.FC<IButton> = ({ color, title, children, ...rest }) => {
    return (
        <Container { ...rest } color={color}>
            <div>
                {children}
                <p>{title}</p>
            </div>
            <span>
                <img src={arrow} />
            </span>
        </Container>
    )
}

export default Button