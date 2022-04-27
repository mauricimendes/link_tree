import styled from "styled-components"

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-image: linear-gradient(to bottom right, #2B64F6, #182F69);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        color: black;
    }

    div {
        margin-top: 24px;
        h1 {
            font-family: 'Poppins', sans-serif;
            font-size: 20px;
            font-weight: 600;
            color: #f3f3f3;
        }

        p {
            font-family: 'Poppins', sans-serif;
            font-size: 14px;
            font-weight: 400;
            color: #f3f3f3;

            span {
                font-weight: 700;
                color: #C5F36D;
            }
        }
    }
`