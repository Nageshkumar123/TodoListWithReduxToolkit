import {createSlice,nanoid} from '@reduxjs/toolkit';


const initialState={
    todos:[
        {
            id:1,text:'Hello World'
        }
    ]
}
const sayHello=()=>{
    console.log("Hello World")
}
export const todoSlice=createSlice({
    name:'Iron Man',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>{
                todo.id!==action.payload
            })
        },
        updateTodo:(state,action)=>{
            const todo={
            id:nanoid(),
            }
            state.todos=state.todos.find((todo)=>{
                todo.id===todos.id;
                text=action.payload;
            }) 
            state.todos.push(todo)
        }},
        deleteTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>{
                todo.id!=action.payload
            })
        }
    } 
 ,);
 export const {
    addTodo,removeTodo
 }=todoSlice.actions
 export default todoSlice.reducer