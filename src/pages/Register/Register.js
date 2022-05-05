import React from "react"
import { ScreenContainer, LogoImage } from "./style"
import logo from '../../assets/logo.png'
import RegisterForm from "./RegisterForm"

export const Register = () => {
    return(
        <ScreenContainer>
            <LogoImage src={logo}/>
            <RegisterForm/>
        </ScreenContainer>
    )
}

export default Register
