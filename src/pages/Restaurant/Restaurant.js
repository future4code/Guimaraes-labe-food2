import React, {useContext, useEffect} from "react";
import { GlobalStateContext } from "../../Global/GlobalStateContext";
import {CardImgTitulo,CardImgProd,CardProd} from "./style"
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import useProtectedPage from "../../Hooks/UseProtectedPage";



export const Restaurant = () => {
    useProtectedPage();
    const {restDetail,getRestDetail} = useContext(GlobalStateContext)
    const param= useParams();
    useEffect (()=>{
        if(restDetail.id !== param.id){
            getRestDetail(param.id)
        }
    },[])
    return(
        <div>
            <Card sx={{ maxWidth: "auto" }} 
                key={restDetail.id}>
                <CardMedia
                component="img"
                alt="Gênio símbolo do habibs"
                height="200"
                image={restDetail.logoUrl}

                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div"
                    color="#5CB646">
                        {restDetail.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {restDetail.category}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {restDetail.deliveryTime}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {restDetail.address}
                    </Typography>
                    
                </CardContent>
            </Card>
            <CardContent>
                {restDetail.products && restDetail.products.map((produto)=>(
                    <Card sx={{ display: 'flex' }} key={produto.id}>
                        <CardMedia
                            component="img"
                            sx={{ width: 151 }}
                            image={produto.photoUrl}
                            alt={produto.name}
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h6" color="#5CB646">
                                    {produto.name}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">{produto.description}</Typography>
                                <Typography variant="subtitle1" color="#000000" component="div" >R$ {produto.price}</Typography>
                                
                                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                    <Button variant="contained" color="primary">Adicionar</Button>
                                </Box>
                            </CardContent>
                        </Box>        
                        
                    </Card>
                        ))}
            </CardContent>        
           
        </div>
    )

}

export default Restaurant