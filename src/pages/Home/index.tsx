import React, { useCallback, useEffect, useState } from "react"
import { GitHub, Linkedin, Headphones, Mail } from 'react-feather'
import { useNavigate } from 'react-router-dom'

import { api_git } from '../../services/api'

import { Container, Header, Main, Section } from './styles'
import PrincipalButton from "../../components/PrincipalButton"
import Button from "../../components/Button"

interface IAvatar {
    avatar_url: string
    name: string
}

const Home: React.FC = () => {

    const navigate = useNavigate()
    const [user, setUser] = useState<IAvatar>({} as IAvatar)
    
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

    const handleNavigatoTo = useCallback(( link: string, emailWindow?: boolean ) => {
        window.open(link, !emailWindow ? "_self" : 'emailWindow')
    }, [])

    return (
        <Container>
            <Header>
                <img src={user.avatar_url} alt={user.name} />
                <h1>Maurici JR</h1>
                <h2>Desenvolvedor Full Stack <br/> Javascript & Flutter </h2>
            </Header>
            <Main>
                <h3>Aumente seu conhecimento</h3>
                <PrincipalButton 
                    onClick={() => {
                        navigate('/portfolio')
                    }} 
                />
            </Main>
            <Section>
                <h3>Fique próximo</h3>
                <Button 
                    onClick={() => handleNavigatoTo('https://github.com/mauricimendes')} 
                    color="#7A51F5" 
                    title="Github"
                >
                    <GitHub color="#7A51F5" />
                </Button>
                <Button 
                    onClick={() => handleNavigatoTo('https://www.linkedin.com/in/maurici-m-7b70a013b/')}
                    color="#E56242" 
                    title="Linkedin"
                >
                    <Linkedin color="#E56242" />
                </Button>
                <Button 
                    onClick={() => handleNavigatoTo('https://open.spotify.com/playlist/37i9dQZF1E37bNH23RxOYz?si=0df475999eb34c17')}
                    color="#EB7B9E" 
                    title="Playlist"
                >
                    <Headphones color="#EB7B9E" />
                </Button>
                <Button 
                    onClick={() => handleNavigatoTo('mailto:mauricimendes.14@gmail.com', true)}
                    color="#2B64F6" 
                    title="Email"
                >
                    <Mail color="#2B64F6" />
                </Button>
            </Section>
        </Container>
    )
}

export default Home