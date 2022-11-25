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

export const BtnRmvFltr = styled.button`
margin-bottom: 50px;
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
outline: none;

`

export const ButtonCategory = styled.button`
  border-radius: 0px;
  color: black;
  background: white;
  margin: 5px 0px 15px 0px;
  text-decoration: none;
  outline: none;
  font-size: 16px;
  border: white;

  :hover {
  text-decoration: none;
}

`

export const RestaurantsList = styled.div`
display: flex;
flex-direction: column;
padding-bottom: 50px;
`

export const Order = styled.div`
display: flex;
flex-direction: column;
width: 375px;
height: 118px;
background-color: #5cb646;
position: fixed;
bottom: 49px;
justify-items: center;

p:first-child{
    padding-top: 24px;
    color: #ffffff
}

p:nth-child(2) {
    font-weight: 500;
}

p:nth-child(3) {
    font-weight: 700;
}


p {
    margin: 0;
    height: 30px;
    padding-left: 80px;

}
`