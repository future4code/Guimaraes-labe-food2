import React from "react";
import { AdressArea, EmptyCart, FormaPagamento, FreteArea, LineSpan,
         NavBar, TextAdressH4, TextAdressP, TotalPay,ButtonConfirm, BtContainer  } from "./style";

import { goToCart, goToHome, goToProfileEditAdress, goToProfileEditData } from "../../Routes/coordinator";
import { useNavigate } from "react-router-dom";
import { FooterProfile} from './style'
import homepageGray from '../../img/homepageGray.png'
import Cart_gray from '../../img/shopping-cart_gray.svg'
import avatarGreen from '../../img/avatarGreen.png'
import edit from '../../img/edit.png'
import { GlobalStateContext } from "../../Global/GlobalStateContext";

         
export const Cart = () => {
    const navigate = useNavigate()

    const reload = () => {
        window.location.reload()
    }

    const cart = () => {
        goToCart(navigate)
    }

    const home = () => {
        goToHome(navigate)
    }

    return(
        <EmptyCart>
            <NavBar>
                <h3>Meu Carrinho</h3>
            </NavBar>

            <AdressArea>
                <TextAdressP>Endereço de Entrega</TextAdressP>
                <TextAdressH4>Rua Clara salgado, 423, São Paulo</TextAdressH4>
            </AdressArea>

            <NavBar>
                <h3>Carrinho Vazio</h3>
            </NavBar>

            <FreteArea>
                <h3>Frete</h3>
                <h3>R$0,00</h3>
            </FreteArea>

            <TotalPay>
                <h3>SUBTOTAL</h3>
                <p>R$0,00</p>
            </TotalPay>
            
            <FormaPagamento>Forma de Pagamento</FormaPagamento>

            <LineSpan></LineSpan>

            <input type="radio" name="pagamento" value="dinheiro"/> Dinheiro<br />
            <input type="radio" name="pagamento" value="cartão"/> Cartão de Credito<br />
            
            <BtContainer>
            <ButtonConfirm >CONFIRMAR</ButtonConfirm >
            </BtContainer>

            <FooterProfile>
                <div>
                    <img src={homepageGray} onClick={home} />
                </div>
                <div>
                    <img src={Cart_gray} onClick={cart} />
                </div>
                <div>
                    <img src={avatarGreen} onClick={reload} />
                </div>  
            </FooterProfile>
        </EmptyCart>
    )
}

export default Cart