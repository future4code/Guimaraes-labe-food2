
import styled from "styled-components"

export const Card = styled.div`
display: flex;
flex-direction: column;
border: 1px solid gray;
max-width: 328px;
height: 196px;
align-items: center;
cursor: pointer;
border-radius: 8px;
margin-top: 8px;
letter-spacing: -0.39px;
font-family: Roboto;
font-weight: 400;



img {
    width: 328px;
    height: 120px;
    margin: 0 0 12px;
    object-fit: cover;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

}


div {
    margin-left: 0px;
    display: flex;
    flex-direction: column;
    width: 296px;
    height: 68px;


    div:nth-child(1) {
        display: flex;
        flex-direction: row;
        height: 22px;

        p {
            font-size: 16px;
            margin: 0;
            color: #5cb646;

        }
    }

    div:nth-child(2) {
        display: flex;
        flex-direction: row;
        color: #b8b8b8;
        height: 20px;

        p:nth-child(1) {
            font-size: 16px;
            margin: 0;
            width: 148px;
        }
        p:nth-child(2) {
            font-size: 16px;
            margin: 0;
            width: 148px;
            display: flex;
            flex-direction: row-reverse;
        }
}
}
`