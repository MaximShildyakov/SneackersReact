import { useDispatch, useSelector } from 'react-redux'
import {Link, NavLink, useLocation} from 'react-router-dom'


function Header({isVisiable, setIsVisiable}){

    const dispatch = useDispatch()
    const cash = useSelector( state => state.cash)

    const addCash = () => {
        dispatch({type: "ADD-CASH"})
    }

    const getCash = () => {
        dispatch({type: "GET-CASH"})
    }
    const location = useLocation();
    let destination;

    // Условно задаем путь назначения
    if (location.pathname === '/favorites') {
        destination = '/';
    } else {
        destination = '/favorites';
    }


    return(
        <header>
            <Link className='link' to = '/'>
            <div>
                <img width={40} height={40} src='./img/logo.png'></img>
                <div>
                    <h3>React Sneakers </h3>
                    <p>Магазин лучших кроссовок</p>
                </div> 
            </div>

            </Link> 
            <ul>
                <li className="cursor" onClick={() => setIsVisiable(!isVisiable)}>
                    <img width={18} height={18} src='./img/cart.png'/>
                    <span>{cash} pyб </span>
                </li>
                <NavLink to={destination}>
                    <li>
                        <img width={18} height={18} src='./img/fav.png'>
                      
                        </img>
                    </li>
                </NavLink>

               
            <Link to="/orders">
                <li>
                    <img width={18} height={18} src='./img/user.png' />
                </li>
            </Link>
            </ul>



        

        </header>
    )
}

export default Header