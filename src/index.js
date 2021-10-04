import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
// import store from './store/store';

const initialState={todo:[]};
const add="ADD";
const del="DELETE";

const todoReducer=(state=initialState,action)=>{
    switch(action.type){
        case add:
            return {todo:[...state.todo,action.payload]};
        case del:
            return {todo:state.todo.filter(el=>el!==action.payload)};
        default:
            return state; 
    }
}

const store=createStore(todoReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
