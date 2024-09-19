import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("gray")

  return (
    <section className='content w-full h-full flex justify-center items-center'>
      <div className="justify-around">
        <div className="img-container mb-8 w-full flex">
          <img className='w-full object-contain flex-1' src={`/frente/frente_${color}.jpg`} alt="" />
          <img className='w-full object-contain flex-1' src={`/lado/lado_${color}.jpg`} alt="" />
          <img className='w-full object-contain flex-1' src={`/tras/tras_${color}.jpg`} alt="" />
        </div>
        <div className="controls flex gap-4 justify-center">
          <button onClick={() => setColor('red')} type='button' className="w-1/6 bg-red-500 hover:bg-red-900 text-white font-bold py-2 px-4 rounded">Red</button>
          <button onClick={() => setColor('green')} type='button' className="w-1/6 bg-green-500 hover:bg-green-900 text-white font-bold py-2 px-4 rounded">Green</button>
          <button onClick={() => setColor('blue')} type='button' className="w-1/6 bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">Blue</button>
          <button onClick={() => setColor('gray')} type='button' className="w-1/6 bg-gray-500 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">Gray</button>
        </div>
        
      </div>
    </section>
  )
}

export default App
