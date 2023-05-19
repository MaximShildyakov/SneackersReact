import Card from "./components/Card";
import Drawer from "./components/Drawer";
import React, {useEffect, useState} from "react";
import ReactRouter from "react";



function App() {


  const [isVisiable, setIsVisiable] = useState(true)

  const [drawerItems, setDrawerItems] = useState([])



  useEffect(() => {
    console.log('2323')
  }, [])



  const sneakersArr = [
    {
      title: 'Мужские Кроссовки Nike Blazer Mid Suede',
      price: 12999,
      imageUrl: './img/sneakers/1.png',
    },
    { 
      title: 'Мужские Кроссовки Nike Air Max 270', 
      price: 15600, 
      imageUrl: './img/sneakers/2.png' 
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
    <header>
      <div>
        <img width={40} height={40} src="/img/logo.png" />
        <div>
          <h3>React Sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul>
        <li className="cursor" onClick={() => setIsVisiable(!isVisiable)}>
          <img  width={18} height={18} src="/img/cart.png" />
          <span>1205 руб.</span>
        </li>
        <li>
          <img width={18} height={18} src="/img/fav.png" />
        </li>

        <li>
          <img width={18} height={18} src="/img/user.png" />
        </li>
      </ul>
    </header>
   

    <Drawer drawerItems={drawerItems} isVisiable={isVisiable} setIsVisiable={setIsVisiable} />

        <div style = {{display: "none"}}  className="overlay">
    <div className="drawer">
      <h2>
        Корзина <img className="cu-p" src="./img/btn-remove.png" alt="Remove" />
      </h2>

      <div className="items">
        <div className="cartItem">
          <div
            style={{ backgroundImage: 'url(/img/sneakers/1.png)' }}
            className="cartItemImg"></div>

          <div className="cartText">
            <p>Мужские Кроссовки Nike Air Max 270</p>
            <b>12 999 руб.</b>
          </div>
          <img className="removeBtn" src="/img/btn-remove.png" alt="Remove" />
        </div>

      </div>

      <div className="cartTotalBlock">
        <ul>
          <li>
            <span>Итого:</span>
            <div></div>
            <b>21 498 руб. </b>
          </li>
          <li>
            <span>Налог 5%:</span>
            <div></div>
            <b>1074 руб. </b>
          </li>
        </ul>
        <button className="greenButton">
          Оформить заказ <img src="/img/arrow.png" alt="Arrow" />
        </button>
      </div>
    </div>
  </div>


    <div className="content">
          <h1>Все кроссовки</h1>
          <div className="search-block">
              <img src="/img/search.png" width={18} height={18} alt="Search" />
              <input placeholder="Поиск..." />
          </div>
        
    <div className="ds-f">
         {sneakersArr.map((elem, index) => <Card pDrawerItems={drawerItems} pSetDrawerItems={setDrawerItems} pTitle={elem.title} pPrice={elem.price} pImg={elem.imageUrl} key={index}/>)}
    </div>

    </div>
  </div>
  );
}

export default App;
