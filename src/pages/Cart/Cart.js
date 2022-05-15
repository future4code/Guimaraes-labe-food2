import React, { useContext } from "react";
import { AdressArea, EmptyCart, FormaPagamento, FreteArea, LineSpan,
         NavBar, TextAdressH4, TextAdressP, TotalPay,ButtonConfirm, BtContainer  } from "./style";

import { goToCart, goToHome, goToProfileEditAdress, goToProfileEditData } from "../../Routes/coordinator";
import { useNavigate } from "react-router-dom";
import { FooterProfile} from './style'
import homepageGray from '../../img/homepageGray.png'
import Cart_gray from '../../img/shopping-cart_gray.svg'
import avatarGreen from '../../img/avatarGreen.png'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { Button } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { GlobalStateContext } from "../../Global/GlobalStateContext";
import back from '../../img/back.png'
import { TitleDiv,BackImg,Subtitle } from "../ProfileEditAdress/style"; 
      
export const Cart = () => {
    const {restDetail,profile} = useContext(GlobalStateContext)
    const navigate = useNavigate()

    const {addCart, cartBasket} = useContext(GlobalStateContext)

    const reload = () => {
        window.location.reload()
    }

    const cart = () => {
        goToCart(navigate)
    }

    const home = () => {
        goToHome(navigate)
    }

    

    console.log(cartBasket)

    const renderBasket = cartBasket.map((item) => {
        return(
            <CardContent key={item.name}>
                <Card sx={{ display: 'flex', margin:-1}} key={item.id}>
                        <CardMedia
                            component="img"
                            sx={{ width: 151}}
                            image={item.photoUrl}
                            alt={item.name}
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto'}}>
                            <Typography component="div" variant="h6" color="#5CB646">
                                    {item.name}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">{item.description}</Typography>
                                <Typography variant="subtitle1" color="#000000" component="div" >R$ {item.price}</Typography>
                                <Typography variant="subtitle1" color="#000000" component="div" >Quantidade {item.quantity}</Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>      
                            </Box>
                            </CardContent>
                        </Box>         
                    </Card>
            </CardContent>
                
        
        )
    })

    return(
        <EmptyCart>
            
            <NavBar>
            <TitleDiv>
                <BackImg src={back} onClick={() => {goToHome(navigate)}} />
            </TitleDiv>
                <h3>Meu Carrinho</h3>
            </NavBar>

            <AdressArea>
                <TextAdressP>Endereço de Entrega</TextAdressP>
                <TextAdressH4>{profile.address}</TextAdressH4>
            </AdressArea>

            <CardContent>
                    <Typography gutterBottom variant="h6" component="div"
                    color="#5CB646">
                        {restDetail.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {restDetail.category}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Tempo de espera {restDetail.deliveryTime} min
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {restDetail.address}
                    </Typography>
                    
                </CardContent>
            {renderBasket}
            

            <CardContent>
                    <FreteArea>
                        <h3>Frete</h3>
                        <h3>R${restDetail.shipping}</h3>
                    </FreteArea>

                    <TotalPay>
                        <h3>SUBTOTAL</h3>
                        <p>R$0,00</p>
                    </TotalPay>
                    <Typography gutterBottom variant="h6" component="div"
                    color="Black">
                        Forma de Pagamento
                    </Typography>
                    <LineSpan></LineSpan>
                    <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="credito" control={<Radio />} label="Crédito" />
                        <FormControlLabel value="debito" control={<Radio />} label="Débito" />
                    </RadioGroup>
                    </FormControl>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 0, pb: 0, }}>
                        <Button sx={{ margin:'auto', width:1000,}} variant="contained" color="primary">Confirmar</Button>
                    </Box>
                </CardContent>

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