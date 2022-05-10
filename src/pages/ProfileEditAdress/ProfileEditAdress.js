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
import {FooterProfile} from '../Profile/style'

const ProfileEditAdress = () => {

  useProtectedPage()
    const reload = () => {
    window.location.reload()
  }

  const navigate = useNavigate()

  const { form, onChange, cleanFields } = useForms({ street: "", number: "", neighbourhood: "", city: "", state: "", complement: ""});

  const submitForm = (event) => {  
      event.preventDefault()  
      axios
    .put(`${BASE_URL}address`, form, {
      headers: {
        auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ikcyb2dFcDFuQnE5bW5TUXNieGI2IiwibmFtZSI6IkxhYmVmb29kMi1HdWltYXJhZXNUZXN0ZSIsImVtYWlsIjoibGFiZWZvb2QyQGd1aW1hcmFlc1Rlc3RlLmNvbS5iciIsImNwZiI6IjIyNS42NzkuNDY4LTk0IiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IkFtYXJvIFNpbGxlcyBkYSBTaWx2YSwgMjEgLSBKZCBFc3RlciIsImlhdCI6MTY1MTY5NzMwOH0.VjlhNvR9EJQ4vtk-sAP2nKcgB9gn_DIXl6i8rGRssnc'
      },
    })
    .then((res) => {
      alert('Seu endereço foi alterado com sucesso!');
      navigate('/profile');
      reload()
    })
    .catch((err) => {
      alert(err.response.data);
    });
  }
  return (
    <div>
      <p>Endereço</p>
      <form onSubmit={submitForm}>

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
          
        </form>

        <button
          onClick={() => {goToProfile(navigate)}}>
            Back
        </button>
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
    </div>
  )
}

export default ProfileEditAdress