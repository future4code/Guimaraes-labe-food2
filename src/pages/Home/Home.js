import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CardRestaurant from "../../components/CardRestaurant/CardRestaurant";
import { GlobalStateContext } from "../../Global/GlobalStateContext";
import { goToRestaurant } from "../../Routes/coordinator";
import { HomeDiv } from "./style";

export const Home = () => {

    const {restaurants,getRestDetail,restDetail} = useContext(GlobalStateContext)






    return(
        <HomeDiv>
            {restaurants.map((rest) => {
                return(
                    <CardRestaurant key={rest.id} rest={rest} getRestDetail={getRestDetail}></CardRestaurant> 

                )
            })}
        </HomeDiv>
    )
    
}

export default Home