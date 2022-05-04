import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalStateContext } from "../../Global/GlobalStateContext";
import { goToRestaurant } from "../../Routes/coordinator";
import { Card } from "./style";

export const CardRestaurant = (props) => {
    const {getRestDetail} = useContext(GlobalStateContext)
    const navigate= useNavigate()
    return(
        <Card onClick={() => {
            goToRestaurant(navigate,props.rest.id);
            getRestDetail(props.rest.id)
            }}>
            <img src={props.rest.logoUrl} />
            <div>
                <div>
                    <p>{props.rest.name}</p>
                </div>

                <div>
                    <p>{(props.rest.deliveryTime - 10)} - {props.rest.deliveryTime} min</p>
                    <p> Frete R${props.rest.shipping},00 </p>
                </div>

            </div>
        </Card>
    )
}

export default CardRestaurant
