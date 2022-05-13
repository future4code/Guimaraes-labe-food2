import React, {useContext} from "react";
import { GlobalStateContext } from "../../Global/GlobalStateContext";
import {    HeaderProfile, Info, Info2, ProfileDiv, Wrapper, FooterProfile} from './style'
import { goToCart, goToHome, goToProfileEditAdress, goToProfileEditData } from "../../Routes/coordinator";
import { useNavigate } from "react-router-dom";

import homepageGray from '../../img/homepageGray.png'
import Cart_gray from '../../img/shopping-cart_gray.svg'
import avatarGreen from '../../img/avatarGreen.png'
import edit from '../../img/edit.png'


export const Profile = () => {
    const {profile, getProfile} = useContext(GlobalStateContext)
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
        <ProfileDiv>
            <HeaderProfile>
                <p>Meu Perfil</p>
            </HeaderProfile>

            <Wrapper>
                <Info>{profile.name}</Info>
                <img src={edit} onClick={() => {goToProfileEditData(navigate)}} />

                

            </Wrapper>
                <Info>{profile.email}</Info>
                <Info>{profile.cpf}</Info>
                <br></br>
                <hr></hr>

            <Info2>Endereço Cadastrado</Info2>

            <Wrapper>
                <Info>{profile.address}</Info>
                <img src={edit} onClick={() => {goToProfileEditAdress(navigate)}} />

            </Wrapper>

            <br></br>
            <hr></hr>
            <div>
                Card com pedidos
            </div>

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

        </ProfileDiv>
    )
}
export default Profile