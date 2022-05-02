import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CardRestaurant from "../../components/CardRestaurant/CardRestaurant";
import { GlobalStateContext } from "../../Global/GlobalStateContext";
import { goToRestaurant } from "../../Routes/coordinator";

export const Home = () => {

    const {restaurants,getRestDetail} = useContext(GlobalStateContext)






    return(
        <div>
            {restaurants.map((rest) => {
                return(
                    <CardRestaurant key={rest.id} rest={rest} getRestDetail={getRestDetail}></CardRestaurant> 

                )
            })}
        </div>
    )
    
}

export default Home