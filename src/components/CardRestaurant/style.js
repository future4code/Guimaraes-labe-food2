
import styled from "styled-components"

export const Card = styled.div`
display: flex;
flex-direction: column;
border: 1px solid gray;
width: 51vw;

img {
    display: flex;
    width: 50vw;
    align-self: center;
}

div {
    margin: 2px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    div {
        display: flex;
        flex-direction: column;
    }
}
`