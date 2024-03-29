export default function Done() { 
    return (
    <div className="done-btn tooltip flex-1 w-full">
        <div className="h-full flex justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="54" height="46" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16" className=" text-green-400">
            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
        </svg>
        </div>
        <div className="tooltip-text absolute bg-gray-700 text-white p-2 rounded-md opacity-0 invisible transition-opacity duration-300 ease-in-out">
            <p>Done</p>
        </div>
    </div>
    );
}