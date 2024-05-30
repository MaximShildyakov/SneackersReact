import React, {createContext, useContext , useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import { createStore } from 'redux';
import isEqual from 'lodash/isEqual';




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
        case "ZERO_CASH":
            return{...state, cash: state.cash = 0}
        case "ADD-VALUE":
            return {...state, inputValue: state.inputValue = action.payload}
        case "NONE-VALUE":
            return {...state, inputValue: state.inputValue = ''}
        case "ADD-TO-FAVORITES":
            // return {...state, favorites: [...state.favorites, action.payload]
            if (!state.favorites.some((elem) => isEqual(elem, action.payload))) {
                return {
                    ...state,
                    favorites: [...state.favorites, action.payload]
                };
            } else {
                // Если объект уже есть, возвращаем текущее состояние без изменений
                return state;
            }
        case "REMOVE-FROM-FAVORITES":
            console.log(action.payload)
            // return  {...state, favorites: state.favorites.filter((elem)=> elem !== action.payload)}
            return {
                ...state,
                favorites: state.favorites.filter((elem) => !isEqual(elem, action.payload))}
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
