
import styled from "styled-components"

export const Card = styled.div`
display: flex;
flex-direction: column;
border: 1px solid gray;
width: 50vw;
align-items: center;
cursor: pointer;
border-radius: 8px;

img {
    display: flex;
    width: 50vw;
    align-self: center;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}


div {
    margin: 2px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 95%;
    height: 80px;


    div:nth-child(1) {
        display: flex;
        flex-direction: column;

        p {
            height: 10px;
        }
    }

    div:nth-child(2) {
        display: flex;
        flex-direction: column;
}
`