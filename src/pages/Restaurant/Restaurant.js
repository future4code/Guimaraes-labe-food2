import React, {useContext} from "react";
import { GlobalStateContext } from "../../Global/GlobalStateContext";


export const Restaurant = () => {
    const {restDetail,getRestDetail} = useContext(GlobalStateContext)


    return(
        <div>
            <p></p>
        </div>
    )

}

export default Restaurant