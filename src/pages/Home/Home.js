import React, { useContext } from "react";
import CardRestaurant from "../../components/CardRestaurant/CardRestaurant";
import { GlobalStateContext } from "../../Global/GlobalStateContext";
import { HeaderHome, HomeDiv } from "./style";

export const Home = () => {
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
        </HomeDiv>
    )
    
}

export default Home