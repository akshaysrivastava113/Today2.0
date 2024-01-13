export default function Delete() { 
    return (
    <div className="delete-btn tooltip flex-1 w-full">
        <div className="h-full flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="26" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16" className=" text-red-400">
                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
            </svg>
        </div>
        <div className="tooltip-text absolute bg-gray-700 text-white p-2 rounded-md opacity-0 invisible transition-opacity duration-300 ease-in-out transform -translate-y-2 translate-x-1/2">
            <p>Delete</p>
        </div>
    </div>
    );
}