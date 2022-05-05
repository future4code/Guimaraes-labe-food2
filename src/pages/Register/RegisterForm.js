import React from "react"
import { InputsContainer, RegisterFormContainer } from "./style"
import { Button, TextField } from "@material-ui/core"
import useForms from '../../Hooks/UseForms'
import { primaryColor } from "../../Constants/colors"

const RegisterForm = () => {
  const [form, onChange, clear] = useForms({name: '', email: '', cpf: '', password: ''})

  const onSubmitForm = (event) => {
      console.log(form)
      event.preventDefault()
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
                  type={'password'}
                />
                <TextField
                  name={'password'}
                  value={form.password}
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