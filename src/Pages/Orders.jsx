import Header from '../components/Header'
import Drawer from '../components/Drawer'
import Card from '../components/Card'

function Orders({isVisible, setIsVisible, drawerItems, orderItems, setOrderItems}){
    return(
        <>
        <Header isVisible={isVisible} setIsVisible={setIsVisible}/>
        <Drawer drawerItems={drawerItems} isVisible={isVisible} setIsVisible={setIsVisible} />
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