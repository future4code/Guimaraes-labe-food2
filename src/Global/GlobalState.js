import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { BASE_URL } from '../Constants/BASE_URL'
import { GlobalStateContext } from './GlobalStateContext'

const GlobalState = (props) => {

  const [restaurants, setRestaurants] = useState([])
  const [restDetail, setRestDetail] = useState([])
  const [namesValue, setValueNames] = useState("")
  const [category, setCategory] = useState("")



  useEffect(()=>{
    getRestaurants()
  },[])

  const getRestaurants = async () => {
    const response = await axios.get(`${BASE_URL}restaurants`,
    {headers: {
      // token chumbado
      auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im8yb2xvajJpUnVpaHEwaG80aUFZIiwibmFtZSI6IkNhcm9sIEthenVlIiwiZW1haWwiOiJjYXJvbC5rYXp1ZUBlbWFpbC5jb20iLCJjcGYiOiI0Mzk3NDczNDgwNSIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLkp1bGlldGEgZGUgTW9yYWVzLCA3NSAtIFZpdG9yaWEgUsOpZ2lhIiwiaWF0IjoxNjUxMTcyNzc5fQ.o0HHdSakboa8xxc29XKjRTa0Jw4IQaLJ5AYF-1NQZFs'

    }})
    setRestaurants(response.data.restaurants)
    console.log(response.data.restaurants)
  }

  const getRestDetail = (id) => {
    axios.get(`${BASE_URL}restaurants/${id}`,
    {headers: {
      // token chumbado
      auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im8yb2xvajJpUnVpaHEwaG80aUFZIiwibmFtZSI6IkNhcm9sIEthenVlIiwiZW1haWwiOiJjYXJvbC5rYXp1ZUBlbWFpbC5jb20iLCJjcGYiOiI0Mzk3NDczNDgwNSIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLkp1bGlldGEgZGUgTW9yYWVzLCA3NSAtIFZpdG9yaWEgUsOpZ2lhIiwiaWF0IjoxNjUxMTcyNzc5fQ.o0HHdSakboa8xxc29XKjRTa0Jw4IQaLJ5AYF-1NQZFs'

    }}).then((response) => {
      setRestDetail(response.data.restaurant)
      console.log(response.data.restaurant)
    }).catch((error) => {
      console.log(error)
    })
  }




  const data = {getRestaurants, restaurants,getRestDetail,restDetail, setValueNames, namesValue, category, setCategory}

  return (
    <GlobalStateContext.Provider value={data}>
        {props.children}
    </GlobalStateContext.Provider>
)

}

export default GlobalState