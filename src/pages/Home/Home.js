import React, { useContext } from "react";
import { GlobalStateContext } from "../../Global/GlobalStateContext";

export const Home = () => {

    const {restaurants} = useContext(GlobalStateContext)



    return(
        <div>
            {restaurants.map((rest, index) => {
                return(
                    <div key={rest.name}>
                        <p>{rest.name}</p>
                    </div>

                )
            })}
        </div>
    )
    
}

export default Home