import { useState } from "react";
import Button from "./Button";
import Todo from "./Todo";



export default function Main() {
    const [todos, setTodos] = useState([]);
    const [enteredTodo, setEnteredTodo] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [inpPlaceholder, setInpPlaceholder] = useState('Enter a todo ...');

    function addTodo() {
        if(enteredTodo){
            setIsValid(true);
        const newArr = [...todos, {subject: enteredTodo, completed: false}];
        setTodos(newArr);
        } else {
            setIsValid(false);
            console.log("Cannot be blank", isValid);
            setInpPlaceholder("Subject cannot be blank ...");
            setTimeout(() => {
                setInpPlaceholder("Enter a todo ...");
            }, 4000)
        }
    }
    return (
        <>
        <div className="mt-4 flex flex-col justify-center items-center w-full">
        <input className={`${isValid?"bg-white":"bg-red-200"} m-2 p-2 w-64 border-b-2 rounded-md valid-check`} placeholder={inpPlaceholder} onChange={(e) => {
            setIsValid(true)
            setInpPlaceholder("Enter a todo ...");
            setEnteredTodo(e.target.value)
        }} onKeyDown={(e) => {
            if(e.key === 'Enter'){
                addTodo();
            }
        }}></input>
        <Button func={addTodo} textCol="bg-white" bgCol="text-blue-400" title="Add"/>
        </div>
        <div className="flex-initial min-h-96 w-full flex flex-wrap justify-center p-4 mt-4">
        {todos.map((todo) => {
            return <Todo subject={todo.subject}/>
        })}
        </div>
        </>
    )
}