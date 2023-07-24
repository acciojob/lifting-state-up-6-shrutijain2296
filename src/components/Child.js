import React  from "react";

const Child = ({todos, completedFnc}) =>{



    return(
        <div>
            <h2>Child Component</h2>
            <ul>
               {
                todos.map((item, index) => (
                   <li key = {index}>
                        <span>
                            {item.text}
                        </span>
                        {
                            !item.completed && (     //if completed property is false -> render the button else dont render the button
                                <button onClick = {() => completedFnc(index)}>Complete</button>
                            )
                        }
                   </li> 
                ))
               }
            </ul>
        </div>
    )
}
export default Child;