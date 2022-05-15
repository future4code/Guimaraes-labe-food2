import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { BASE_URL } from '../Constants/BASE_URL'
import { GlobalStateContext } from './GlobalStateContext'

const GlobalState = (props) => {

  const [profile, setProfile] = useState([])
  const [restaurants, setRestaurants] = useState([])
  const [restDetail, setRestDetail] = useState([])
  const [namesValue, setValueNames] = useState("")
  const [category, setCategory] = useState("")
  const [change, setChange] = useState(false)
  const [cartBasket, setCart]=useState([])


  useEffect(()=>{
    getProfile()
    getRestaurants()
  },[])

  useEffect(()=>{
    console.log(cartBasket)
  },[cartBasket])
  
  const getProfile =  () => {
    const token = localStorage.getItem("token");

    axios.get(`${BASE_URL}profile`,
    {headers: {
      auth:token,
    }})
    .then((res) => {
      setProfile(res.data.user)
      console.log('aquiii', res.data.user)
    })

  }

  // const getRestaurants = async () => {
  //   const token = localStorage.getItem("token");
  //   const response = await axios.get(`${BASE_URL}restaurants`,
  //   {headers: {
  //     // token chumbado
  //     auth: token

  //   }})
  //   setRestaurants(response.data.restaurants)
  //   console.log("lista de restaurantes", response.data.restaurants)
  // }

  const getRestaurants = () => {
    const token = localStorage.getItem("token");

    axios
      .get(`${BASE_URL}restaurants`, {
        headers: {
          auth: token
        },
      })
      .then((res) => {
        setRestaurants(res.data.restaurants);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };



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

  const addCart=(product,quant)=>{
    product.quantity=quant
    setCart([...cartBasket,product])
  }
  const apagar=()=>{
    
  }
  const data = {getRestaurants, restaurants,getRestDetail,
    restDetail, setValueNames, namesValue, category, 
    setCategory, setProfile, getProfile, profile, change, setChange, addCart, cartBasket}

  return (
    <GlobalStateContext.Provider value={data}>
        {props.children}
        
    </GlobalStateContext.Provider>
  )

}

export default GlobalState