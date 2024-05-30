import { useDispatch, useSelector  } from "react-redux"
import Header from "../components/Header"
import Card from "../components/Card";

export default function Favorities(){

   const favorites = useSelector(state => state.favorites)

    return(
    <>
        <Header/>
        <div className="ds-f">
            {favorites.map((elem, index) => 
                <div key={index}>
                    <div>
                        
                    </div>

                    <div className="card">
                        <p>{elem.title}</p>
                        <img width={133} height={112} src={elem.imageURL} alt="Sneakers" />
                        <h3>{elem.price}</h3>
                    </div>
                </div>
            )
            }
        </div>
        
        
    </>
    );
}