import {useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo} from '../action/actions'

const Input=()=>{
    const todoRef=useRef(null);

    const dispatch=useDispatch();

    const addHandler=()=>{
        dispatch(addTodo(todoRef.current.value));
        todoRef.current.value='';
    }

    return (
        <div>
            <input type='text' ref={todoRef}/>
            <button onClick={addHandler}>todo등록</button>
        </div>
    )
}

export default Input;