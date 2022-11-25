import React, {useContext, useEffect} from "react";
import { GlobalStateContext } from "../../Global/GlobalStateContext";
import {    HeaderProfile, Info, Info2, ProfileDiv, Wrapper, FooterProfile} from './style'
import { goToCart, goToHome, goToLoginPage, goToProfileEditAdress, goToProfileEditData } from "../../Routes/coordinator";
import { useNavigate } from "react-router-dom";
import { TitleDiv,BackImg,Subtitle } from "../ProfileEditAdress/style";
import useProtectedPage from "../../Hooks/UseProtectedPage";
import CardContent from '@mui/material/CardContent';
import homepageGray from '../../img/homepageGray.png'
import Cart_gray from '../../img/shopping-cart_gray.svg'
import avatarGreen from '../../img/avatarGreen.png'
import edit from '../../img/edit.png'
import back from '../../img/back.png'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
export const Profile = () => {
    const {profile, history,orderHistory} = useContext(GlobalStateContext)
    const navigate = useNavigate()
    useProtectedPage();
    
    const logout = () => {
        localStorage.removeItem('token')
        goToLoginPage(navigate)
    }
    
    const reload = () => {
        window.location.reload()
    }

    const cart = () => {
        goToCart(navigate)
    }

    const home = () => {
        goToHome(navigate)
    }

    console.log(history)

    useEffect(() => {orderHistory()}, [])
    return(
        <ProfileDiv>
      <TitleDiv>
        <BackImg src={back} onClick={() => {goToHome(navigate)}} />
        <Subtitle>Perfil</Subtitle>
        <button onClick={logout}>Logout</button>
      </TitleDiv>
      <br/>
      <br/>
      <br/>



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
            <Typography sx={{margin:2}} gutterBottom variant="h6" component="div" color="Black">
                Histórico de Pedidos Finalizados
            </Typography>
                
                {history && history.map((histProd)=>(
                    <CardContent sx={{pl:-2, pb:0,}}>
                        <Card
                        sx={{ maxWidth: "auto"}}>
                        
                        <Typography gutterBottom variant="h8" component="div"
                        color="#5CB646">
                            {histProd.restaurantName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Data do pedido {new Date(histProd.createdAt).toLocaleString()}
                        </Typography>
                        <Typography variant="body2" color="Black">
                            SUBTOTAL R${histProd.totalPrice}
                        </Typography>
                        </Card>
                        
                        </CardContent>
                ))}
                
                
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