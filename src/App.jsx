import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './assets/beams-bg.jpg'
import TodoContent from './components/TodoContent';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col justify-between bg-[url("./assets/beams-bg.jpg")] min-h-screen'>
    <Header/>
    <Main/>
    <Footer/>
    </div>
  )
}

export default App
