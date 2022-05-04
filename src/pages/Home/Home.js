import React, { useContext } from "react";
import CardRestaurant from "../../components/CardRestaurant/CardRestaurant";
import { GlobalStateContext } from "../../Global/GlobalStateContext";
import { FilterGrid, FooterHome, HeaderHome, HomeDiv } from "./style";
import useProtectedPage from "../../Hooks/UseProtectedPage";
import { useNavigate } from "react-router-dom";
import { goToCart, goToLoginPage, goToProfile } from "../../Routes/coordinator";
import Homepage_green from '../../img/homepage_green.svg'
import Cart_gray from '../../img/shopping-cart_gray.svg'
import Avatar_gray from '../../img/avatar_gray.svg'

export const Home = () => {
    useProtectedPage();
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem('token')
        goToLoginPage(navigate)
    }

    const reload = () => {
        window.location.reload()
    }

    const cart = () => {
        goToCart(navigate)
    }

    const profile = () => {
        goToProfile(navigate)
    }

    const {restaurants,getRestDetail, setCategory, category} = useContext(GlobalStateContext)

    // const updateCategory = (event) => {
    //     setCategory(event.target.value)
    // }

    // console.log(category)

    return(
        <HomeDiv>
            <HeaderHome>
                <p>FutureEats</p>
            </HeaderHome>
            <input placeholder="Restaurante"></input>
            <FilterGrid>
                <p value="Árabe" 
                // onClick={updateCategory}
                >Árabe</p>
                <p value="Asiática" 
                // onClick={updateCategory}
                >Asiática</p>
                <p value="Baiana" 
                // onClick={updateCategory}
                >Baiana</p>
                <p value="Hambúrguer" 
                // onClick={updateCategory}
                >Hambúrguer</p>
                <p value="Carnes" 
                // onClick={updateCategory}
                >Carnes</p>
                <p value="Petiscos" 
                // onClick={updateCategory}
                >Petiscos</p>
                <p value="Italiana" 
                // onClick={updateCategory}
                >Italiana</p>
                <p value="Mexicana" 
                // onClick={updateCategory}
                >Mexicana</p>
                <p value="Sorvetes" 
                // onClick={updateCategory}
                >Sorvetes</p>
            </FilterGrid>
            {restaurants.map((rest) => {
                return(
                    <CardRestaurant key={rest.id} rest={rest} getRestDetail={getRestDetail}></CardRestaurant>
                )
            })}
            <button onClick={logout}>SAIR DO APP</button>
            <FooterHome>
                <div>
                    <img src={Homepage_green} onClick={reload} />
                </div>
                <div>
                    <img src={Cart_gray} onClick={cart} />
                </div>
                <div>
                    <img src={Avatar_gray} onClick={profile} />
                </div>  
            </FooterHome>
        </HomeDiv>
    )
    
}

export default Home