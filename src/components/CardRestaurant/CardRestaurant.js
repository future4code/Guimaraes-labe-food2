import React from "react";
import { Card } from "./style";

export const CardRestaurant = (props) => {
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
                    <button onClick={() => props.getRestDetail(props.rest.id)}>Detalhes</button>
                </div>

            </div>
        </Card>
    )
}

export default CardRestaurant

