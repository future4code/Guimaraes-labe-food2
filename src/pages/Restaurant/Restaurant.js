import React, {useContext, useEffect} from "react";
import { HeaderHome, HeaderWrapper} from "../Home/style";
import { GlobalStateContext } from "../../Global/GlobalStateContext";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import useProtectedPage from "../../Hooks/UseProtectedPage";
import Modal from '@mui/material/Modal';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from "react-router-dom";
import back from '../../img/back.png'
import { TitleDiv,BackImg,Subtitle } from "../ProfileEditAdress/style";
import { goToHome } from "../../Routes/coordinator"; 
import { Navigate } from "react-router-dom";
import { AdressArea, EmptyCart, FormaPagamento, FreteArea, LineSpan,
    NavBar, TextAdressH4, TextAdressP, TotalPay,ButtonConfirm, BtContainer  } from "../Cart/style"
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    height: 170,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export const Restaurant = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = (id) => setOpen(id);
    const handleClose = () => setOpen(false);
    const [quantidade, setQuantidade] = React.useState('');
    const handleChange = (event) => {
        setQuantidade(event.target.value);
    };
    const navigate = useNavigate()

    useProtectedPage();
    const {restDetail,getRestDetail,addCart} = useContext(GlobalStateContext)
    const param= useParams();
    useEffect (()=>{
        if(restDetail.id !== param.id){
            getRestDetail(param.id)
        }
    },[])
    return(
        <div>
            <NavBar>
            <TitleDiv>
                <BackImg src={back} onClick={() => {goToHome(navigate)}} />
            </TitleDiv>
                <h3>FutureEats</h3>
            </NavBar>
            
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
                        Tempo de espera {restDetail.deliveryTime} min
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {restDetail.address}
                    </Typography>
                    
                </CardContent>
            </Card>
            <CardContent>
                {restDetail.products && restDetail.products.map((produto)=>(
                    <Card sx={{ display: 'flex', margin:1}} key={produto.id}>
                        <CardMedia
                            component="img"
                            sx={{ width: 151}}
                            image={produto.photoUrl}
                            alt={produto.name}
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto'}}>
                                <Typography component="div" variant="h6" color="#5CB646">
                                    {produto.name}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">{produto.description}</Typography>
                                <Typography variant="subtitle1" color="#000000" component="div" >R$ {produto.price}</Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                    <div>
                                        <Button variant="contained" color="primary" onClick={() => handleOpen(produto.id)}>Adicionar</Button>
                                        <Modal
                                            key={produto.id}
                                            BackdropProps={{
                                                sx:{
                                                    bgcolor: 'rgba(0, 0, 0, 0.12)'
                                                }
                                            }}
                                            open={produto.id===open}
                                            onClose={handleClose}
                                            aria-labelledby="modal-modal-title"
                                            aria-describedby="modal-modal-description"
                                        >
                                            <Box sx={style}>
                                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                                Selecione a quantidade desejada
                                            </Typography>

                                            <FormControl sx={{ m: 3, minWidth: 120 }} size="small">
                                                
                                                <Select
                                                    labelId="demo-select-small"
                                                    id="demo-select-small"
                                                    value={quantidade}
                                                    label="Quantidade"
                                                    onChange={handleChange}
                                                >
                                                    <MenuItem value="">
                                                    </MenuItem>
                                                    <MenuItem value={1}>1</MenuItem>
                                                    <MenuItem value={2}>2</MenuItem>
                                                    <MenuItem value={3}>3</MenuItem>
                                                    <MenuItem value={4}>4</MenuItem>
                                                    <MenuItem value={5}>5</MenuItem>
                                                    <MenuItem value={6}>6</MenuItem>
                                                    <MenuItem value={7}>7</MenuItem>
                                                    <MenuItem value={8}>8</MenuItem>
                                                    <MenuItem value={9}>9</MenuItem>
                                                    <MenuItem value={10}>10</MenuItem>
                                                </Select>
                                            </FormControl>
                                            <Button sx={{ m: 3}} onClick={()=>{addCart(produto,quantidade);
                                                setQuantidade("")
                                            }}>Adicionar</Button>
                                            </Box>
                                        </Modal>
                                    </div>
                                       
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