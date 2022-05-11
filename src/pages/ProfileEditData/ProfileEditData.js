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
import { MainDiv, Form, Subtitle, BackImg, TitleDiv   } from '../ProfileEditAdress/style';



const ProfileEditData = () => {

  useProtectedPage()
    const reload = () => {
    window.location.reload()
  }

  const navigate = useNavigate()

  const { form, onChange, clenFields} = useForms({ name: "", email: "", cpf: ""});

  const handleSubmission = (event) => {  
      event.preventDefault()  
      axios
    .put(`${BASE_URL}profile`, form, {
      headers: {
        auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ikcyb2dFcDFuQnE5bW5TUXNieGI2IiwibmFtZSI6IkxhYmVmb29kMi1HdWltYXJhZXNUZXN0ZSIsImVtYWlsIjoibGFiZWZvb2QyQGd1aW1hcmFlc1Rlc3RlLmNvbS5iciIsImNwZiI6IjIyNS42NzkuNDY4LTk0IiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IkFtYXJvIFNpbGxlcyBkYSBTaWx2YSwgMjEgLSBKZCBFc3RlciIsImlhdCI6MTY1MTY5NzMwOH0.VjlhNvR9EJQ4vtk-sAP2nKcgB9gn_DIXl6i8rGRssnc'
      },
    })
    .then((res) => {
      alert('Seus dados pessoais foram alterados com sucesso!');
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
        <Subtitle>Dados Pessoais</Subtitle>
      </TitleDiv>
      <Form onSubmit={handleSubmission}>

      <input
          value={form.name}
          placeholder="Nome"
          name="name"
          onChange={onChange}
          label="Nome"
          variant="outlined"
          required
        />
       <input
          value={form.email}
          placeholder="email"
          name="email"
          onChange={onChange}
          label="email"
          variant="outlined"
          required
        />
        
        <input
          value={form.cpf}
          placeholder="CPF"
          name="cpf"
          onChange={onChange}
          label="cpf"
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

export default ProfileEditData