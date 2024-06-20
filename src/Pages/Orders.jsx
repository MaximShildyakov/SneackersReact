import Header from '../components/Header'
import Drawer from '../components/Drawer'
import Card from '../components/Card'

function Orders({isVisiable, setIsVisiable, drawerItems ,orderItems, setOrderItems}){
    console.log(orderItems)
    console.log(orderItems.length)

    function delHistoryofOrders(){
        console.log(orderItems)
        setOrderItems([])
    }
    return(
        <>
        <Header isVisiable={isVisiable} setIsVisiable={setIsVisiable}/>
        <Drawer drawerItems={drawerItems} isVisiable={isVisiable} setIsVisiable={setIsVisiable}  />
        <div className="content">
        <div className="ds-f">
           {orderItems.map((elem, index) => <Card drawerItems={drawerItems} setOrderItems={setOrderItems} orderItems={orderItems} pTitle={elem.title} pPrice={elem.price} 
           pUrl={elem.imageUrl} key={index}/>) }
        </div>
        <button onClick={() => delHistoryofOrders(orderItems)} className="greenButton">
        Удалить историю заказов <img src='./img/arrow.png' alt="Arrow" />
        </button>
        </div>
        </>
    );
}

export default Orders;