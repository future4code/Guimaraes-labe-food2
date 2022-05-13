import styled from 'styled-components'

export const EmptyCart = styled.div`
width: 100%;
height: 640px;
overflow-x:hidden;
`
export const NavBar = styled.div`
width: 100%;
height: 64px;
margin: 0 0 1px;
text-align: center;

 h3{
    font-size: 18px;
    color: black;
 }
`

export const AdressArea = styled.div`
width: 100%;
height: 76px;
margin: 1px 0 8px;
padding: 16px;
background-color: #eee;
`
export const TextAdressP = styled.p`
height: 18px;
margin: 0 0 8px;
font-family: Roboto;
font-size: 16px;
letter-spacing: -0.39px;
color: #b8b8b8;
`

export const TextAdressH4 = styled.h4`
font-family: Roboto;
font-size: 16px
color:black;

`

export const FreteArea = styled.div`
display: flex;
justify-content:right;

h3{
    margin:5px;
}

`

export const TotalPay = styled.div`
display: flex;
flex-direction: row;
justify-content:space-between;

h3{
    font-size: 18px;
}

p{
    color: #5cb646;
    font-size: 18px;
}
`
export const FormaPagamento = styled.p`
font-family: Roboto;
font-size: 16px;
font-weight: normal;
`

export const LineSpan = styled.div`
margin: 8px 16px;
border: solid 1px black;
`
export const BtContainer = styled.div`
text-align: center 

`


export const ButtonConfirm = styled.button`
width: 328px;
  height: 42px;
  padding: 12px 16px;
  border: none;
  background-color:rgba(92, 182, 70, 0.5);
  margin-top: 100px;
  
`
export const FooterProfile = styled.div`
display: flex;
flex-direction: row;
width: 100%;
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
        height: 27px;

    }
}
`