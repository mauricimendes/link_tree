import React from "react"

import { Container, Main } from './styles'
import Header from "../../components/Header"
import BoxInfo from "../../components/BoxInfo"
import RegularRow from "../../components/RegularRow"

const Portfolio: React.FC = () => {
    return (
        <Container>
            <Header />
            <BoxInfo />
            <Main>
                <RegularRow 
                    title="Título aqui" 
                    description="A descrição sempre vai aqui e quando o texto for grande..." 
                    color="#7A51F5" 
                />
                <RegularRow 
                    title="Título aqui" 
                    description="A descrição sempre vai aqui e quando o texto for grande..." 
                    color="#E56242" 
                />
                <RegularRow 
                    title="Título aqui" 
                    description="A descrição sempre vai aqui e quando o texto for grande..." 
                    color="#C5F36D" 
                />
                <RegularRow 
                    title="Título aqui" 
                    description="A descrição sempre vai aqui e quando o texto for grande..." 
                    color="#2B64F6" 
                />
                <RegularRow 
                    title="Título aqui" 
                    description="A descrição sempre vai aqui e quando o texto for grande..." 
                    color="#EB7B9E" 
                />
            </Main>
        </Container>
    )
}

export default Portfolio