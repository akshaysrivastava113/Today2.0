export default function Button(props) {
    console.log(props)
    return (
        <button onClick={props.func} className="text-white bg-blue-400 p-2 w-36 font-normal rounded-md shadow-md shadow-gray-300 hover:shadow-xl hover:font-medium">
            {props.title}
        </button>
    )
}