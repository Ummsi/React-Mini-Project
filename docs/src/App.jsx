import React from 'react' 
import Background from "./Components/Background.jsx";
import Forground from "./Components/Forground.jsx";

const App = () => {
  return (
    <div className='relative w-full h-screen bg-zinc-800'>
    <Background />
    <Forground />
    </div>
  )
}

export default App
