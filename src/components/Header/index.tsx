import React, { useEffect, useState } from "react"

import { Container } from "./styles"
import { api_git } from '../../services/api'

interface IAvatar {
    avatar_url: string
    name: string
}

const Header: React.FC = () => {

    const [user, setUser] = useState({} as IAvatar)

    useEffect(() => {
        api_git.get<IAvatar>('/mauricimendes')
            .then( res => {
                setUser({
                    avatar_url: res.data.avatar_url,
                    name: res.data.name
                })
            })
            .catch( err => {
                console.log( err )
            })
    }, [])

    return (
        <Container>
            <div>
                <img src={user.avatar_url} alt={user.name} />
                <section>
                    <h1>Portfólio</h1>
                    <h3>Aproveite todo esse <span>conhecimento.</span></h3>
                </section>
            </div>
        </Container>
    )
}

export default Header