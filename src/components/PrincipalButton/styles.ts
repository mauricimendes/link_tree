import styled from "styled-components"

export const Container = styled.button`
    height: 72px;
    width: 100%;

    background-color: #191825;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 0 0 16px;

    border: 1px solid white;
    border-radius: 8px;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        
        svg {
            color: #C5F36D;
        }
        
        p {
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            color: #f3f3f3;
            font-size: 16px;
            margin-left: 16px;
        }
    }

    span {
        height: 70px;
        width: 300px;
        background-color: #C5F36D;
        clip-path: polygon(50% 0, 100% 0, 100% 100%, 20% 100%);

        border-radius: 0 8px 8px 0;


        padding-right: 8px;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;

        img {
            height: 24px;
        }
    }
`