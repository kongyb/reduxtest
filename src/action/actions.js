
export const add="ADD"
export const del="DELETE";

export const addTodo=(text)=>{
    return {
        type:add,
        payload:text
    }
}

export const deleteTodo=(text)=>{
    return {
        type:del,
        payload:text
    }
}