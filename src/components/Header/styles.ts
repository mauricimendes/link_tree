import styled from "styled-components"

export const Container = styled.header`
    height: 132px;
    width: 100vw;

    background-image: linear-gradient(to bottom right, #2B64F6, #182F69);

    padding: 22px 0 0 20px;

    position: absolute;
    top: 0;

    div {

        display: flex;
        flex-direction: row;
        align-items: center;
        
        img {
            height: 60px;
            border-radius: 30px;
            border: 2px solid #f3f3f3;
            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        }
        
        section {
            margin-left: 8px;
            
            h1 {
                font-family: 'Poppins', sans-serif;
                font-weight: 600;
                font-size: 18px;
                margin-bottom: -4px;
            }
            
            h3 {
                font-family: 'Poppins', sans-serif;
                font-weight: 400;
                font-size: 14px;
                
                span {
                    font-weight: 700;
                    color: #C5F36D;
                }
            }
        }
    }
`