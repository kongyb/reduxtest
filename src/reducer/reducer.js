import {add,del} from '../action/actions';

const initialState=[];

const todoReducer=(state=initialState,action)=>{
    switch(action.type){
        case add:
            return [...state,action.payload];
        case del:
            return state.filter(el=>el!==action.payload);
        default:
            return state; 
    }
}

export default todoReducer;