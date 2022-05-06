import styled from 'styled-components'

export const HomeDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 375px;
align-items: center;
font-family: Roboto;
letter-spacing: -0.39px;

input {
    width: 326px;
    height: 56px;
    padding: 0;
    font-size: 16px;
    color: #d0d0d0;
    justify-content: center;
    margin-top: 8px;
    margin-bottom: 8px;
    border-radius: 8px;

}
`

export const HeaderHome = styled.div`
display: flex;
width: 100%;
height: 44px;
align-items: center;
justify-content: center;
position: sticky;
top: 0;
background-color: white;

p {
    font-size: 16px;
    font-weight: 400;
    color: black;
}
`

export const HeaderWrapper = styled.div`
display: flex;
flex-direction: column;
position: sticky;
top: 44px;
background-color: white;
`

export const FooterHome = styled.div`
display: flex;
width: 100%;
flex-direction: row;
height: 49px;
background-color: white;
position: fixed;
bottom: 0;

div {
    display: flex;
    width: 120px;
    height: 49px;
    justify-content: center;

    img {
        width: 27px;

    }
}
`

export const FilterGrid = styled.div`

display: grid;
grid-template-columns: 20px repeat(9);
grid-template-rows: 1;
column-gap: 20px;
grid-auto-flow: column;
overflow-x: scroll;
align-content: start;
width: 328px;
background-color: white;



`

