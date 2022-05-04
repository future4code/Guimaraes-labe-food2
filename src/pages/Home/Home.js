import React, { useContext } from "react";
import CardRestaurant from "../../components/CardRestaurant/CardRestaurant";
import { GlobalStateContext } from "../../Global/GlobalStateContext";
import { HeaderHome, HomeDiv } from "./style";
import useProtectedPage from "../../Hooks/UseProtectedPage";
import { useNavigate } from "react-router-dom";
import { goToLoginPage } from "../../Routes/coordinator";


export const Home = () => {
    const navigate = useNavigate()
    useProtectedPage();

    const logout = () => {
        localStorage.removeItem('token')
        goToLoginPage(navigate)
      }

    const {restaurants,getRestDetail} = useContext(GlobalStateContext)

    return(
        <HomeDiv>
            <HeaderHome>
                <p>FutureEats</p>
            </HeaderHome>
            <input placeholder="Restaurante"></input>
            {restaurants.map((rest) => {
                return(
                    <CardRestaurant key={rest.id} rest={rest} getRestDetail={getRestDetail}></CardRestaurant>
                )
            })}
            <button onClick={logout}>SAIR DO APP</button>
        </HomeDiv>
    )
    
}

export default Home