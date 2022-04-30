import React, { useContext } from "react";
import { GlobalStateContext } from "../../Global/GlobalStateContext";

export const Home = () => {

    const {restaurants,getRestDetail} = useContext(GlobalStateContext)



    return(
        <div>
            {restaurants.map((rest) => {
                return(
                    <div key={rest.id}>
                        <p> {rest.name}</p>
                        <button onClick={() => getRestDetail(rest.id)}>detalhes</button>
                    </div>

                )
            })}
        </div>
    )
    
}

export default Home