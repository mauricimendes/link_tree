import styled from "styled-components"

export const Container = styled.div`
        height: 100vh;
        width: 100vw;
        background-image: linear-gradient(to bottom right, #2B64F6, #182F69);

    @media screen and (min-width: 1024px) {
        padding: 0 25%;
    }
`

export const Header = styled.header`

    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        height: 124px;
        border-radius: 68px;
        border: 3.8px solid white;

        margin-top: 56px;
    }

    h1 {
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 24px;
        margin-top: 16px;
    }   
    
    h2 {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: 16px;
        margin-top: 16px;
        
        text-align: center;
    }   
`

export const Main = styled.main`
    padding: 0 20px;
    padding-bottom: 24px;
    margin-top: 56px;

    h3 {
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 4px;
    }

    border-bottom: 1px solid #D7D7D7;
`

export const Section = styled.section`
    padding: 0 20px;

    margin-top: 28px;

    h3 {
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 4px;
    }
`