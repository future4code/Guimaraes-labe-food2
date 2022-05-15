import React from 'react'
import useForms from '../../Hooks/UseForms'
import axios from "axios";
import {BASE_URL} from '../../Constants/BASE_URL'
import useProtectedPage from '../../Hooks/UseProtectedPage'
import {goToCart, goToHome, goToProfile} from '../../Routes/coordinator'
import { useNavigate } from 'react-router-dom';
import homepageGray from '../../img/homepageGray.png'
import Cart_gray from '../../img/shopping-cart_gray.svg'
import avatarGreen from '../../img/avatarGreen.png'
import back from '../../img/back.png'
import {FooterProfile} from '../Profile/style'
import { MainDiv, Form, Subtitle, BackImg, TitleDiv   } from './style';

const ProfileEditAdress = () => {

  useProtectedPage()
    const reload = () => {
    window.location.reload()
  }

  const navigate = useNavigate()

  const { form, onChange, cleanFields } = useForms({ street: "", number: "", neighbourhood: "", city: "", state: "", complement: ""});

  const submitForm = (event) => {  
    const token = localStorage.getItem("token");

      event.preventDefault()  
      axios
    .put(`${BASE_URL}address`, form, {
      headers: {
        auth: token,
      },
    })
    .then((res) => {
      localStorage.setItem('token', res.data.token)

      alert('Seu endereço foi alterado com sucesso!');
      navigate('/profile');
      reload()
    })
    .catch((err) => {
      alert(err.response.data);
    });
  }
  return (
    <MainDiv>
      <TitleDiv>
        <BackImg src={back} onClick={() => {goToProfile(navigate)}} />
        <Subtitle>Endereço</Subtitle>
      </TitleDiv>

      <Form onSubmit={submitForm}>

      <input  
          value={form.street}
          placeholder="Rua, Av, etc"
          name="street"
          onChange={onChange}
          label="Logadouro"
          variant="outlined"
          required
        />
       <input
          value={form.number}
          placeholder="numero"
          name="number"
          onChange={onChange}
          label="Número"
          variant="outlined"
          pattern="[.\s\w]{1,}"
          required
        />
        
        <input
          value={form.complement}
          placeholder="Complemento"
          name="complement"
          onChange={onChange}
          label="Complemento"
          variant="outlined"
          
        />
        
        <input
          value={form.neighbourhood}
          placeholder="Bairro"
          name="neighbourhood"
          onChange={onChange}
          label="Bairro"
          variant="outlined"
          />
        <input
          value={form.city}
          placeholder="Cidade"
          name="city"
          onChange={onChange}
          label="Cidade"
          variant="outlined"
          required
        />
        <input
          value={form.state}
          placeholder="Estado"
          name="state"
          onChange={onChange}
          label="Estado"
          variant="outlined"
          required
        />

          <button
          type={"submit"}
          >
            SALVAR
          </button>
          
        </Form>

        <FooterProfile>
                <div>
                    <img src={homepageGray} onClick={() => {goToHome(navigate)}} />
                </div>
                <div>
                    <img src={Cart_gray} onClick={() => {goToCart(navigate)}} />
                </div>
                <div>
                    <img src={avatarGreen} onClick={reload} />
                </div>  
          </FooterProfile>
    </MainDiv>
  )
}

export default ProfileEditAdress