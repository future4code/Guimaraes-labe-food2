import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {BASE_URL} from '../../Constants/BASE_URL'
import {MainDiv, BtnDiv, BtnLogin, Label, LoginInput, PasswordInput, Title, Title2, TitleDiv, FooterTitle, Register  } from '../LoginPage/style'
import {goToHome, goToRegister} from '../../Routes/coordinator'

export const LoginPage = () => {

const navigate = useNavigate()
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')


const handleEmail = (e) => setEmail(e.target.value) 
const handlePassword = (e) => setPassword(e.target.value) 

const login = () => {
  const body = {
    email: email,
    password: password
  }
  axios
    .post(`${BASE_URL}login`, body)
    .then(res => {
      localStorage.setItem('token', res.data.token)
      navigate('/home')
    })
    .catch((err) => {console.log(err.response.data.message)}
    )
    
}

  return (
    
        <MainDiv>
            <TitleDiv>
            <Title>Future</Title>
            <Title2>Eats</Title2>
            </TitleDiv>
            
            <LoginInput type={'email'} placeholder={'Email de Usuário'} value={email} onChange={handleEmail} required/>
            <PasswordInput type={'password'} placeholder={'Senha'} value={password} onChange={handlePassword} required/>
            <br/>
            <br/>
            <BtnDiv>
            <BtnLogin onClick={login}>Entrar</BtnLogin>
            </BtnDiv>
            <FooterTitle>Ainda não é cadastrado? <Register  onClick={() => {goToRegister(navigate)}}>Clique aqui</Register></FooterTitle>

        </MainDiv>



  )
} 
export default LoginPage