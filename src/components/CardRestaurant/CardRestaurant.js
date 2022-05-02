import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalStateContext } from "../../Global/GlobalStateContext";
import { goToRestaurant } from "../../Routes/coordinator";
import { Card } from "./style";

export const CardRestaurant = (props) => {
    const {getRestDetail} = useContext(GlobalStateContext)
    const navigate= useNavigate()
    return(
        <Card>
            <img src={props.rest.logoUrl} />
            <div>
                <div>
                    <p>{props.rest.name}</p>
                    <p>{props.rest.deliveryTime} min</p>
                </div>

                <div>
                    <p>Frete {props.rest.shipping}</p>
                    <button onClick={() => {
                        goToRestaurant(navigate,props.rest.id);
                        getRestDetail(props.rest.id)
                        }}>Detalhes</button>
                </div>

            </div>
        </Card>
    )
}

export default CardRestaurant

