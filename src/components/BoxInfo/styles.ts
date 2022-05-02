import styled from "styled-components"

export const Container = styled.div`
    background-color: #f0f0f0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    width: 80%;
    height: 60px;

    position: absolute;
    top: 102px;

    display: flex;
    flex-direction: row;
    align-items: center;

    align-self: center;

    padding: 20px;

    div {
        p {
            font-family: 'Poppins', sans-serif;
            font-size: 10px;
            color: #2F2F33;

            span {
                font-weight: bold;
            }
        }
    }

`

export const Divider = styled.span`
    width: 1.6px;
    background-color: #2F2F33;
    height: 32px;
    margin: 0 20px;
`