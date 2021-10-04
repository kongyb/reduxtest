import {useDispatch,useSelector} from 'react-redux';
import {deleteTodo} from '../action/actions';

const Todolist=()=>{
    const dispatch=useDispatch();
    const todoList=useSelector(state=>state);

    function deleteHandler(todo){
        dispatch(deleteTodo(todo));
    }

    return (
        <div>
            {todoList.length===0?
            '등록된 todo가 없습니다.':
            todoList.map(el=>{
                return (
                    <div>
                        <span> {el} </span>
                        <button onClick={()=>{deleteHandler(el)}}>todo삭제</button>
                    </div>
                )
            })
            }
        </div>
    )
}

export default Todolist;