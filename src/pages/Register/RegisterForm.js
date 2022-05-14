import React from "react"
import { InputsContainer, RegisterFormContainer } from "./style"
import { Button, TextField } from "@material-ui/core"
import useForms from '../../Hooks/UseForms'
import { register } from "../../services/user"
import { useNavigate } from "react-router-dom"

const RegisterForm = () => {
  const navigate = useNavigate()
  const [form, onChange, clear] = useForms({name: '', email: '', cpf: '', confirmation: ''})

  const onSubmitForm = (event) => {
      console.log(form)
      event.preventDefault()
      register(form, clear, navigate)
  }

    return (
       <form onSubmit={onSubmitForm}>
           <RegisterFormContainer> 
              <InputsContainer>
                <TextField
                  name={'name'}
                  value={form.name}
                  onChange={onChange}
                  label={'Nome'}
                  variant={'outlined'}
                  fullWidth
                  margin={'normal'}
                  required
                  type={'name'}
                />
                <TextField
                  name={'email'}
                  value={form.email}
                  onChange={onChange}
                  label={'E-mail'}
                  variant={'outlined'}
                  fullWidth
                  margin={'normal'}
                  required
                  type={'email'}
                />
                <TextField
                  name={'cpf'}
                  value={form.cpf}
                  onChange={onChange}
                  label={'CPF'}
                  variant={'outlined'}
                  fullWidth
                  margin={'normal'}
                  required
                  type={'cpf'}
                />
                <TextField
                  name={'password'}
                  value={form.password}
                  onChange={onChange}
                  label={'Senha'}
                  variant={'outlined'}
                  fullWidth
                  margin={'normal'}
                  required
                />
                <TextField
                  name={'confirmation'}
                  value={form.confirmation}
                  onChange={onChange}
                  label={'Confirmar'}
                  variant={'outlined'}
                  fullWidth
                  margin={'normal'}
                  required
                  type={'password'}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant={'contained'}
                  color={'primary'}
                >
                  Criar
                </Button>
              </InputsContainer>
           </RegisterFormContainer>
       </form>
    )
  }
  export default RegisterForm