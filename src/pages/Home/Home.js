import React, { useContext } from "react";
import { GlobalStateContext } from "../../Global/GlobalStateContext";
import Restaurant from "../Restaurant/Restaurant";
import { useNavigate } from 'react-router-dom'
import { goToRestaurant } from "../../Routes/coordinator";
export const Home = () => {
    const navigate = useNavigate()
    const {restaurants,getRestDetail} = useContext(GlobalStateContext)



    return(
        <div>
            {restaurants.map((rest) => {
                return(
                    <div key={rest.id}>
                        <p> {rest.name}</p>
                        <button onClick={() => {goToRestaurant(navigate,rest.id);getRestDetail(rest.id)}}>detalhes</button>
                    </div>

                )
            })}
        </div>
    )
    
}

export default Home