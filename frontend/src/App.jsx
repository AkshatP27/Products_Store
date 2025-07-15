import axios from './utils/axiosconfig'
import React, { useEffect } from 'react'

const App = () => {

  const getData = async () => {
    try {
      const res = await axios.get("/products")
      const res1 = await axios.get("/users")
      console.log("Products Response:",res);
      console.log("Users Response:",res1);
      
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
    getData();
  }, [])
  

  return (
    <div>App</div>
  )
}

export default App