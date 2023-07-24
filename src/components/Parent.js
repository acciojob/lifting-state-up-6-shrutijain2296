import React, {useState} from "react";
import Child from "./Child";

const Parent = () =>{
    let[todos, setTodos] = useState([
        {id: 1, text: "Learn React", completed: false},
        {id: 2, text: "Build a React app", completed: false},
        {id: 3, text: "Deploy the React app", completed: false}
    ]);

    const completedFnc = (index) =>{
        const updatedTodos = todos.map((todo, i) =>{
            if(i === index){
                return{
                    ...todo,
                    completed: true,
                }
            }
            return todo;
        })
        setTodos(updatedTodos);
    }


    return(
        <div>
            <h1>Parent Component</h1>
            <Child todos = {todos} completedFnc = {completedFnc}/>
        </div>
    )
}
export default Parent;