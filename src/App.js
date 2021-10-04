import './App.css';
import {useDispatch,useSelector} from 'react-redux';
import {useRef} from 'react';

const add="ADD"
const del="DELETE";


const addTodo=(text)=>{
    return {
        type:add,
        payload:text
    }
}

const deleteTodo=(text)=>{
    return {
        type:del,
        payload:text
    }
}

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

const Todolist=()=>{
  const dispatch=useDispatch();
  const todoList=useSelector(state=>state.todo);

  function deleteHandler(todo){
      dispatch(deleteTodo(todo));
  }

  return (
      <div>
          {todoList.length===0?
          '등록된 todo가 없습니다.':
          todoList.map((el,index)=>{
              return (
                  <div key={index}>
                      <span> {el} </span>
                      <button onClick={()=>{deleteHandler(el)}}>todo삭제</button>
                  </div>
              )
          })
          }
      </div>
  )
}

function App() {
  return (
    <div className="container">
      <Input></Input>
      <Todolist></Todolist>
    </div>
  );
}

export default App;
