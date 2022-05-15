import React, { useContext, useEffect } from "react";
import CardRestaurant from "../../components/CardRestaurant/CardRestaurant";
import { GlobalStateContext } from "../../Global/GlobalStateContext";
import { BtnRmvFltr, ButtonCategory, FilterGrid, FooterHome, HeaderHome, HeaderWrapper, HomeDiv, Order, RestaurantsList } from "./style";
import useProtectedPage from "../../Hooks/UseProtectedPage";
import { useNavigate } from "react-router-dom";
import { goToCart, goToLoginPage, goToProfile } from "../../Routes/coordinator";
import Homepage_green from '../../img/homepage_green.svg'
import Cart_gray from '../../img/shopping-cart_gray.svg'
import Avatar_gray from '../../img/avatar_gray.svg'
import axios from "axios";
import { BASE_URL } from "../../Constants/BASE_URL";

export const Home = () => {
    useProtectedPage();
    const navigate = useNavigate()


    useEffect(()=>{
        getActiveOrder()
      },[])

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

    const {restaurants,getRestDetail, setValueNames, namesValue, setCategory, category, order, setOrder} = useContext(GlobalStateContext)

    const updateNamesValue = (event) => {
        setValueNames(event.target.value)
    }

    const getActiveOrder = () => {
        const token = localStorage.getItem("token")
        
        axios.get(`${BASE_URL}active-order`,
       {headers: {
         auth:token
      }}).then((res)=> {
        setOrder(res.data.order)
        console.log(res.data)
        navigate("/home")

    
    
      })
      }



    const renderOrder = () => {
        if (order != null) {
            return(
                <Order>
                    <p>Pedido em andamento</p>
                    <p>{order.restaurantName}</p>
                    <p><span>SUBTOTAL R$ </span>{order.totalPrice}</p>
                </Order>
            )
        }
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

                    {renderOrder()}

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