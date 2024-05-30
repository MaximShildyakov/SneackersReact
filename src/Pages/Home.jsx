import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import Drawer from "../components/Drawer";
import Header from '../components/Header';
import React, {useState} from "react";

function Home({drawerItems, setDrawerItems, orderItems, setOrderItems, isVisiable, setIsVisiable, sneakersArr, deleteItems}){

  const dispatch = useDispatch()

  const inputValue = useSelector(state => state.inputValue)


  function changeInput(e){
    dispatch({type: "ADD-VALUE", payload: e.target.value })

    // console.log(inputValue)
  }



    return(
    <>
      <Header isVisiable={isVisiable} setIsVisiable={setIsVisiable} />

      <Drawer drawerItems={drawerItems} setDrawerItems={setDrawerItems} isVisiable={isVisiable} setIsVisiable={setIsVisiable} 
        orderItems={orderItems} setOrderItems={setOrderItems} deleteItems={deleteItems} />
     
      <div className="content">
            <h1> {inputValue? `Search for ${inputValue}` : `All sneakers`}</h1>
            <div className="search-block">
                <img className="search-img" src="/img/search.png" width={18} height={18} alt="Search" />
                <input value={inputValue} onChange={(e) => changeInput(e)} placeholder="Поиск..." />
                <img  className={ inputValue != '' ? "cross" : "cross-input"} onClick={() => dispatch({type: "NONE-VALUE"})} src="/img/cross-23.svg" width={18} height={18}></img>
            </div>
          
        <div className="ds-f">
           {sneakersArr.filter((elem, index) => elem.title.toLowerCase().includes(inputValue.toLowerCase())).map((elem, index) => <Card pTitle={elem.title} pPrice={elem.price} 
           pUrl={elem.imageUrl} pDrawerItems={drawerItems} pSetDrawerItems={setDrawerItems} key={index}/>) }
        </div>
        </div>
    </>
    

    );
}

export default Home;