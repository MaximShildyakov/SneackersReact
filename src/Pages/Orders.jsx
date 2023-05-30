import Header from '../components/Header'
import Drawer from '../components/Drawer'
import Card from '../components/Card'

function Orders({isVisiable, setIsVisiable, drawerItems, orderItems, setOrderItems}){
    return(
        <>
        <Header isVisiable={isVisiable} setIsVisiable={setIsVisiable}/>
        <Drawer drawerItems={drawerItems} isVisiable={isVisiable} setIsVisiable={setIsVisiable} />
        <div className="content">
        <div className="ds-f">
           {orderItems.map((elem, index) => <Card drawerItems={drawerItems} setOrderItems={setOrderItems} orderItems={orderItems} pTitle={elem.title} pPrice={elem.price} 
           imageUrl={elem.imageUrl} key={index}/>) }
        </div>
        </div>
        </>
    );
}

export default Orders;