import styled from 'styled-components'

export const ProfileDiv = styled.div`
height: 100vh;
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
export const Wrapper = styled.div`
width: 90%;
display: flex;
justify-content: space-between;

img{
    height: 30px;
}


`

export const FooterHome = styled.div`
display: flex;
flex-direction: row;
height: 49px;
background-color: white;
position: sticky;
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

export const Info = styled.p`
  width: 328px;
  height: 18px;
  margin: 16px 16px 8px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
`


export const Info2 = styled.p`
  width: 328px;
  height: 18px;
  margin: 16px 16px 8px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39;
  color: #b8b8b8;
`