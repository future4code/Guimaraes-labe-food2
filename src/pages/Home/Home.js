import React, { useContext } from "react";
import CardRestaurant from "../../components/CardRestaurant/CardRestaurant";
import { GlobalStateContext } from "../../Global/GlobalStateContext";
import { BtnRmvFltr, ButtonCategory, FilterGrid, FooterHome, HeaderHome, HeaderWrapper, HomeDiv, RestaurantsList } from "./style";
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

    const {restaurants,getRestDetail, setValueNames, namesValue, setCategory, category, } = useContext(GlobalStateContext)

    const updateNamesValue = (event) => {
        setValueNames(event.target.value)
    }

    return(
        <HomeDiv>
            <HeaderHome>
                <p>FutureEats</p>
                <button onClick={logout}> x</button>

            </HeaderHome>
            <HeaderWrapper>
                <input placeholder="Restaurante" type='text' onChange={updateNamesValue} value={namesValue}></input>
                <FilterGrid>
                    <ButtonCategory onClick={() => setCategory("")}>Todos</ButtonCategory>
                    <ButtonCategory onClick={() => setCategory("Árabe")}>Árabe</ButtonCategory>
                    <ButtonCategory onClick={() => setCategory("Asiática")}>Asiática</ButtonCategory>
                    <ButtonCategory onClick={() => setCategory("Baiana")} >Baiana</ButtonCategory>
                    <ButtonCategory onClick={() => setCategory("Hambúrguer")}>Hambúrguer</ButtonCategory>
                    <ButtonCategory onClick={() => setCategory("Carnes")}>Carnes</ButtonCategory>
                    <ButtonCategory onClick={() => setCategory("Petiscos")}>Petiscos</ButtonCategory>
                    <ButtonCategory onClick={() => setCategory("Italiana")}>Italiana</ButtonCategory>
                    <ButtonCategory onClick={() => setCategory("Mexicana")}>Mexicana</ButtonCategory>
                    <ButtonCategory onClick={() => setCategory("Sorvetes")}>Sorvetes</ButtonCategory>
                </FilterGrid>
            </HeaderWrapper>
            <RestaurantsList>
                {restaurants.filter(item => item.name.toLowerCase().includes(namesValue.toLowerCase())).filter(filteredRest => filteredRest.category.includes(category)).map(filteredRest => (
                <CardRestaurant key={filteredRest.id} rest={filteredRest} getRestDetail={getRestDetail}></CardRestaurant>
                ))} 
            </RestaurantsList>
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