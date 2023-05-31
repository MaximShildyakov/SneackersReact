
import React, {useEffect, useState, createContext} from "react";
import ReactRouter from "react";
import { Form, Link, Route, Routes } from "react-router-dom";
import Orders from './Pages/Orders'
import Home from './Pages/Home'
import NotFound from "./Pages/NotFound";
import Favorites from "./Pages/Favorites";


function App() {


  const [isVisiable, setIsVisiable] = useState(false)



  const [drawerItems, setDrawerItems] = useState([])

  const [orderItems, setOrderItems] = useState([])

  useEffect(() => {
    console.log('2323')
  }, [ReactRouter])



  const sneakersArr = [
    {
      title: 'Мужские Кроссовки Nike Blazer Mid Suede',
      price: 12999,
      imageUrl: './img/sneakers/1.png',
    },
    { 
      title: 'Мужские Кроссовки Nike Air Max 270', 
      price: 15600, 
      imageUrl: './img/sneakers/2.png', 
    },
    {
      title: 'Мужские Кроссовки Nike Blazer Mid Suede',
      price: 8499,
      imageUrl: './img/sneakers/3.png',
    },
    {
      title: 'Кроссовки Puma X Aka Boku Future Rider',
      price: 8999,
      imageUrl: './img/sneakers/4.png',
    },
  ];

  return (

    
    <div className="wrapper">
      <Routes>
        <Route path='/' element={<Home orderItems={orderItems} setOrderItems={setOrderItems} drawerItems={drawerItems} setDrawerItems={setDrawerItems} isVisiable={isVisiable} 
        setIsVisiable={setIsVisiable} sneakersArr={sneakersArr}/>} >
        </Route>

        <Route path="/orders" element={<Orders isVisiable={isVisiable} setIsVisiable={setIsVisiable} drawerItems={drawerItems} orderItems={orderItems} setOrderItems={setOrderItems}/>}>

        </Route>


        <Route path="/form" element={<Form/>}>
        </Route>


        <Route path="/favorites" element={<Favorites/>} >
        </Route>


        <Route path="*" element={<NotFound/>}>
        </Route>

      </Routes>
   
  </div>
  );
}

export default App;
