import styled, { css } from "styled-components"

interface IProps {
    color: string
}

export const Container = styled.div<IProps>`
    width: 100%;
    height: 90px;
    background-color: #f3f3f3;
    
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    border-radius: 8px;

    display: flex;
    flex-direction: row;

    padding: 8px 14px;

    display: flex;
    flex-direction: row;
    align-items: center;

    margin-bottom: 14px;

    span {
        height: 90px;
        width: 160px;
        ${props => css`
            background-color: ${props.color};
        `}
        clip-path: polygon(0% 0, 50% 0, 100% 100%, 0% 100%);

        border-radius: 8px 0px 0px 8px;

        position: absolute;

        margin-left: -14px;

        padding-right: 8px;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
    }

    img {
        z-index: 1;
    }

    section {
        z-index: 1;
        margin-left: 14px;

        h1 {
            font-family: 'Poppins', sans-serif;
            font-size: 14px;
            font-weight: 600;
            color: #2F2F33;
        }
        
        p {
            font-family: 'Poppins', sans-serif;
            font-size: 12px;
            font-weight: 400;
            color: #2F2F33;
        }
    }
`