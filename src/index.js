import React, {createContext, useContext , useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import { createStore } from 'redux';



const defaultState = {
    cash: 0,
}


const reducer = (state = defaultState, action) => {
    switch(action.type){
        case "ADD-CASH":
            return {...state, cash: state.cash + action.payload }
        case "GET-CASH":
            return {...state, cash: state.cash - action.payload}
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
