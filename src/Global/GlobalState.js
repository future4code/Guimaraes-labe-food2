import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { BASE_URL } from '../Constants/BASE_URL'
import { GlobalStateContext } from './GlobalStateContext'

const GlobalState = (props) => {

  const [restaurants, setRestaurants] = useState([])
  const [restDetail, setRestDetail] = useState([])
  const [namesValue, setValueNames] = useState("")
  const [category, setCategory] = useState("")
  const [profile, setProfile] = useState([])
  const [change, setChange] = useState(false)
  const [carrinho, setCarrinho]=useState([])


  useEffect(()=>{
    getProfile()
  },[])

  useEffect(()=>{
    getRestaurants()
  },[])

  useEffect(()=>{
    console.log(carrinho)
  },[carrinho])
  
  const getProfile = async () =>{
    const token = localStorage.getItem("token");

    const res = await axios.get(`${BASE_URL}profile`,
    {headers: {
      auth:token,
    }})
    setProfile(res.data.user)
    console.log('aquiii', res.data.user)
  }

  const getRestaurants = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${BASE_URL}restaurants`,
    {headers: {
      auth: token,


    }})
    setRestaurants(response.data.restaurants)
    console.log("lista de restaurantes", response.data.restaurants)
  }

  const getRestDetail = (id) => {
    const token = localStorage.getItem("token");

    axios.get(`${BASE_URL}restaurants/${id}`,
    {headers: {
      auth: token,

    }}).then((response) => {
      setRestDetail(response.data.restaurant)
      console.log("lista de detalhes", response.data.restaurant)
    }).catch((error) => {
      console.log(error)
    })
  }

  const adicionarCarrinho=(produto,quantidade)=>{
    produto.quantity=quantidade
    setCarrinho([...carrinho,produto])
  }
  const apagar=()=>{
    
  }
  const data = {getRestaurants, restaurants,getRestDetail,
    restDetail, setValueNames, namesValue, category, 
    setCategory, setProfile, getProfile, profile, change, setChange,adicionarCarrinho}

  return (
    <GlobalStateContext.Provider value={data}>
        {props.children}
        
    </GlobalStateContext.Provider>
  )

}

export default GlobalState