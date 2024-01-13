import Delete from "./Delete";
import Done from "./Done";
import Edit from "./Edit";

export default function TodoContent() {
    return (
        <div className="absolute w-80 h-full bg-transparent top-0 flex justify-center">
        <div className="todo-content flex-auto w-60 bg-transparent"></div>
            <button className="todo-btn flex-auto w-20 bg-white flex flex-col items-center justify-evenly opacity-80">
               <Edit/>
               <Done/>
               <Delete/>
            </button>
        </div>
    )
}