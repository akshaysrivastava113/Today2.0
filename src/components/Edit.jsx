export default function Edit() {
    function editTodo() {
        console.log("Edit clicked");
    }
    return (
    <div className="edit-btn tooltip flex-1 w-full" onClick={editTodo}>
        <div className="h-full flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="21" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16" className=" text-blue-400">
            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
            </svg>
        </div>
        <div className="tooltip-text absolute bg-gray-700 text-white p-2 rounded-md opacity-0 invisible transition-opacity duration-300 ease-in-out transform -translate-y-2 translate-x-1/2">
            <p>Edit</p>
        </div>
    </div>
    );
}