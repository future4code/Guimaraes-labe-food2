import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { goToLoginPage } from "../Routes/coordinator";

const useProtectedPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (!token) {
      alert('Usuário deve estar logado para acessar o conteúdo!')
      goToLoginPage(navigate)
    }
  } ,[])
};

export default useProtectedPage;