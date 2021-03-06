import styled from 'styled-components'

export const MainDiv = styled.div`
height: 95vh;
width: 100vw;
display: flex;
flex-direction: column;
margin: 0 auto;
justify-content: center;
padding: 0;
`

export const BtnDiv = styled.div`
display: flex;
margin: auto;
justify-content: center;
margin: auto;
width: 50vw;
height: 10vh;
`

export const BtnLogin = styled.button`
margin: auto;
border-radius: 2px;
height: 42px;
width: 328px;
background: #5cb646;
border-color: #5CB646;
color: black;
transition: 1.3s;

    :hover{
        background: #5CB646 ;
        color: #000000;
        opacity: 70%;
    }
    
;

`
export const Label = styled.label`
width: 30vw;
margin: auto;
color: white;
font-size: 1.6em;


`
export const LoginInput = styled.input`
width: 328px;
height: 56px;
margin: auto;
outline: none;
font-size: 1.1em;

`

export const PasswordInput = styled.input`
width: 328px;
height: 56px;
margin: auto;
outline: none;
font-size: 1.1em;


`

export const TitleDiv = styled.div`
display: flex;
flex-direction: column;
height: 30vh;
`


export const Title = styled.p`
width: auto;
margin: auto;
align-items: center;
color: black;
font-size: larger;
font-size: 3em;
    `

export const Title2 = styled.p`
width: auto;
margin: auto;
align-items: center;
color: #5CB646;
font-size: larger;
font-size: 2.8em;
margin-top: -50px;

`

export const FooterTitle = styled.p`
width: auto;
margin: auto;
align-items: center;
color: black;
font-size: larger;
font-size: 1.2em;

`

export const Register = styled.span`
width: auto;
margin: auto;
align-items: center;
color: black;
font-size: larger;
font-size: 1.2em;
padding-left: 15px;
transition: 0.6s;


    :hover{
        transition: 0.6s;
        color: #5CB646  ;
        text-decoration: underline;
        text-decoration-color: white;
        cursor: pointer;
        
    }

`