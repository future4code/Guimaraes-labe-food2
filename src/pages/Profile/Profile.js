import React, {useContext} from "react";
import { GlobalStateContext } from "../../Global/GlobalStateContext";
import { HeaderHome, FooterHome } from "../Home/style";
import {ProfileDiv, Wrapper, Info, Info2} from '../Profile/style'
import { goToCart, goToProfile } from "../../Routes/coordinator";
import { useNavigate } from "react-router-dom";
import edit from '../../img/edit.png'
import Homepage_green from '../../img/homepage_green.svg'
import Cart_gray from '../../img/shopping-cart_gray.svg'
import Avatar_gray from '../../img/avatar_gray.svg'



export const Profile = () => {
    const {profile,getProfile} = useContext(GlobalStateContext)
    const navigate = useNavigate()

    const reload = () => {
        window.location.reload()
    }

    const cart = () => {
        goToCart(navigate)
    }

    const gotoprofile = () => {
        goToProfile(navigate)
    }


    return(
        <ProfileDiv>
            <HeaderHome>
                <p>Meu perfil</p>
            </HeaderHome>

            <Wrapper>            
            
            <Info>{profile.name}</Info>
            <img src={edit}  />
            </Wrapper>

            <Info>{profile.email}</Info>
            <Info>{profile.cpf}</Info>
            
            <br></br>

            <Info2>Endereço Cadastrado</Info2>     

            <Wrapper>
            <Info>{profile.address}</Info>
            <img src={edit}  />
            </Wrapper>
            
            <br></br>
            <hr></hr>
            
            <div>Histórico de pedidos-Fazer um Card-</div>
           
           <FooterHome>
                <div>
                    <img src={Homepage_green} onClick={reload} />
                </div>
                <div>
                    <img src={Cart_gray} onClick={cart} />
                </div>
                <div>
                    <img src={Avatar_gray} onClick={gotoprofile} />
                </div>  
            </FooterHome>



        </ProfileDiv>
    )
}
export default Profile