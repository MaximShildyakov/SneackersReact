import React, { useState, useContext } from "react";
import { useDispatch, useSelector } from 'react-redux'

const Card = ({pUrl, pPrice, pTitle, pDrawerItems, pSetDrawerItems}) => {


    const [itemsCount, setItemsCount] = useState(0)

    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash)
    const favorites = useSelector(state => state.favorites)
    // const favorites = useSelector(state => state.favorites)

    function onAddToCart(){
        setItemsCount(!itemsCount)
        // if(pDrawerItems.indexOf((pTitle, pUrl, pPrice)) != -1){
        //     pDrawerItems.filter((elem) => elem != elem.pTitle)
        // }
        pSetDrawerItems([...pDrawerItems, {pUrl, pPrice, pTitle}])
        dispatch({type: "ADD-CASH", payload: pPrice })
   
        setItemsCount(itemsCount + 1)

    }

    function deleteFromCart(pTitle){
            setItemsCount(0)
            pSetDrawerItems(pDrawerItems.filter((obj) => pTitle !== obj.pTitle))
    }

    const [heartIcon, setHeartIcon] = useState(false)


    function changeIcon(Naming, Costing, Reference){

        if(!heartIcon){
            dispatch({type: "ADD-TO-FAVORITES", payload: {title: Naming, price: Costing, imageURL: Reference}})
            setHeartIcon(!heartIcon)
            console.log(favorites)
        }
        else{
            dispatch({type: "REMOVE-FROM-FAVORITES", payload: {title: Naming, price: Costing, imageURL: Reference}})
            setHeartIcon(!heartIcon)
            console.log(favorites)
        }
        // dispatch({type: "ADD-TO-FAVORITES", payload: {title: Naming, price: Costing, imageURL: Reference}})
        // console.log(favorites)


    }


    function deleteItems(){
        setItemsCount(0)
        pSetDrawerItems(pDrawerItems.filter((obj) => pTitle != obj.pTitle))
    }



    return(
        <div className="card">
        <div>
            <img onClick={() => changeIcon(pTitle, pPrice, pUrl)} src={heartIcon != false ? '/img/heartOn.png' : '/img/heart.png'} width={32} height={32} alt="Unliked" />
        </div>
        <img width={133} height={112} src={pUrl} alt="Sneakers" />
        <h5>{pTitle}</h5>
        <div className="cardChildDiv">
            <div className="container">
                <span>Цена:</span>
                <b>{pPrice}</b>
            </div>
                <div>
                    <img className="plus" onClick={() => onAddToCart()}  width={32} height={32} src={itemsCount !== 0 ? "/img/btn-checked.svg" : "/img/plus.png"} alt="Plus" />
                    { itemsCount === 0 ? <></>  : <img className="plus" onClick={() => deleteFromCart(pTitle)}  width={32} height={32} src={"/img/minusicon.png"} alt="Del" />}


                    {itemsCount && <img className="button" onClick={() => deleteItems()} width={31} height={31} src={'/img/cross.png'} alt='Del' /> } 
              </div>
                
                 
                

              
        </div>
            <p>Amount: {itemsCount}</p>
        </div>
    )
}


export default Card