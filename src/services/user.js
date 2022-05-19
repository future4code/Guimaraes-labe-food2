import axios from "axios"
import { BASE_URL } from '../Constants/BASE_URL' 
import { goToRegisterAdress } from '../Routes/coordinator'   
 
export  const register = (body, clear, navigate) => {  
    axios.post(`${BASE_URL}signup`, body)
    .then((res) => {
            localStorage.setItem('token', res.data.token)       
            clear()       
            goToRegisterAdress(navigate)     
        })     
            .catch((err) => alert('erro no login'))   
        }