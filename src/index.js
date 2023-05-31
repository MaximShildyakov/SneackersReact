import React, {createContext, useContext , useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import { createStore } from 'redux';



const defaultState = {
    cash: 0,
    inputValue: '',
    favorites: [],
}


const reducer = (state = defaultState, action) => {
    switch(action.type){
        case "ADD-CASH":
            return {...state, cash: state.cash + action.payload }
        case "GET-CASH":
            return {...state, cash: state.cash - action.payload}
        case "ADD-VALUE":
            return {...state, inputValue: state.inputValue = action.payload}
        case "NONE-VALUE":
            return {...state, inputValue: state.inputValue = ''}
        case "ADD-TO-FAVORITES":
            return {...state, favorites: [...state.favorites, action.payload]
            }
        case "REMOVE-FROM-FAVORITES":
            console.log(action.payload)
            return  {...state, favorites: state.favorites.filter((elem)=> elem !== action.payload)}
        default:
            return state
    }

}


const store = createStore(reducer)





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
    
);
