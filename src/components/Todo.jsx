import { useState } from "react";
import TodoContent from "./TodoContent";



export default function Todo(props) {

    const [isMouseEntered, setIsMouseEntered] = useState(false);
    console.log(isMouseEntered);
    function handleMouseEnter() {
        setIsMouseEntered(true);
    }

    function handleMouseLeave() {
        setIsMouseEntered(false);
    }

    return (
        <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="w-80 min-h-48 m-4">
        <div className="relative w-80 min-h-48 bg-white flex flex-wrap justify-center items-center rounded-md border-2 shadow-md shadow-gray-200 text-ellipsis">
            <p>{props.subject}</p>
            {isMouseEntered && <TodoContent/>}
        </div>
        </button>
    )
}