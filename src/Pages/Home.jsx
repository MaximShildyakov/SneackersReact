import Card from "../components/Card";
import Drawer from "../components/Drawer";
import Header from '../components/Header';

function Home({drawerItems, setDrawerItems, orderItems, setOrderItems, isVisible, setIsVisible, sneakersArr}){
    return(
    <>
      <Header isVisible={isVisible} setIsVisible={setIsVisible} />

      <Drawer drawerItems={drawerItems} setDrawerItems={setDrawerItems} isVisible={isVisible} setIsVisible={setIsVisible} 
        orderItems={orderItems} setOrderItems={setOrderItems} />
     
      <div className="content">
            <h1>Все кроссовки</h1>
            <div className="search-block">
                <img src="/img/search.png" width={18} height={18} alt="Search" />
                <input placeholder="Поиск..." />
            </div>
          
        <div className="ds-f">
           {sneakersArr.map((elem, index) => <Card pTitle={elem.title} pPrice={elem.price} 
           pUrl={elem.imageUrl} pDrawerItems={drawerItems} pSetDrawerItems={setDrawerItems} key={index}/>) }
        </div>
        </div>
    </>
    

    );
}

export default Home;