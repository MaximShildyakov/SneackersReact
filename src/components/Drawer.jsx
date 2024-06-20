import React, {useState} from "react"
import { useDispatch, useSelector } from 'react-redux'


function Drawer({drawerItems, setDrawerItems, isVisiable, setIsVisiable, orderItems, setOrderItems, deleteItems}){


  const [isOrdered, setIsOrdered] = useState(false)

  const cash = useSelector( state => state.cash)

  const dispatch = useDispatch()


  function makeOrder(){
    console.log(drawerItems)
    setOrderItems([...orderItems, drawerItems])
    setDrawerItems([])
    setIsOrdered(!isOrdered)
    // deleteItems();
    // dispatch({type: "ZERO_CASH"})
    // console.log("makeOrder was called")
    // // setDrawerItems(DrawerItems.filter((obj) => Title !== obj.pTitle))
    // dispatch({type: "ZERO_CASH"})

  
  }

    return(

<div  style={isVisiable ? {display: 'block'} : {display: 'none'}} className="overlay">
<div className="drawer">
  <h2>
    Корзина <img onClick={() => setIsVisiable(!isVisiable)} className="cu-p cursor" src='./img/btn-remove.png' alt="Remove" />
  </h2>


  {isOrdered && 
  <div style={{position: "absolute", top: '330px', right: '100px'}}><img src='./img/complete-order.jpg' alt="You made an order"/>
    <h3>You made an order</h3>
   </div>}

  <div className="items">
    {
      drawerItems.map( (obj, index) =>


        <div key={index} className="cartItem">
        {/*<div*/}
        {/*  style={{ backgroundImage:  `url(${obj.pImg})` }}*/}
        {/*  className="cartItemImg"></div>*/}
          <img className="cartItemImg" src={obj.pUrl} alt="Sneakers" />
        <div className="cartText">
          <p>{obj.pTitle}</p>
          <b>{obj.pPrice} руб.</b>
        </div>
        <img className="removeBtn" src='./img/btn-remove.png' alt="Remove" />
      </div>
      )
    }
    


  </div>

  <div className="cartTotalBlock">
    <ul>
      <li>
        <span>Итого:</span>
        <div></div>
        <b>{cash} руб. </b>
      </li>
      <li>
        <span>Налог 5%:</span>
        <div></div>
        <b>{parseFloat((cash * 0.05).toFixed(2))} руб. </b>
      </li>
    </ul>
    <button onClick={() => makeOrder()} className="greenButton">
      Оформить заказ <img src='./img/arrow.png' alt="Arrow" />
    </button>
  </div>
</div>
</div>
    )
}

export default Drawer
