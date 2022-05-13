import React from "react";
import { AdressArea, EmptyCart, FormaPagamento, FreteArea, LineSpan,
         NavBar, TextAdressH4, TextAdressP, TotalPay,ButtonConfirm, BtContainer  } from "./style";

export const Cart = () => {
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

        </EmptyCart>
    )
}

export default Cart