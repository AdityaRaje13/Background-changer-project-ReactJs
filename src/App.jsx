import { useState } from 'react'
import './App.css'

function App() {

  const[color, setColor] = useState('black');

  return (
    <>
      <div className= 'container' style={{backgroundColor:`${color}`}}>
           
          <nav className='navbar'>
            
              <button className='btn' style={{backgroundColor:"red"}} onClick={() => setColor("Red")}>Red</button>
              <button className='btn' style={{backgroundColor:"green"}} onClick={() => setColor("Green")}>Green</button>
              <button className='btn' style={{backgroundColor:"blue"}} onClick={() => setColor("Blue")}>Blue</button>
              <button className='btn' style={{backgroundColor:"olive"}} onClick={() => setColor("Olive")}>Olive</button>
              <button className='btn' style={{backgroundColor:"gray"}} onClick={() => setColor("Gray")}>Gray</button>
              <button className='btn' style={{backgroundColor:"yellow"}} onClick={() => setColor("Yellow")}>Yellow</button>
              <button className='btn' style={{backgroundColor:"pink"}} onClick={() => setColor("Pink")}>Pink</button>
              <button className='btn' style={{backgroundColor:"purple"}} onClick={() => setColor("Purple")}>Purple</button>
              <button className='btn' style={{backgroundColor:"lavender"}} onClick={() => setColor("Lavender")}>Lavender</button>
              <button className='btn' style={{backgroundColor:"white"}} onClick={() => setColor("White")}>White</button>
              <button className='btn' style={{backgroundColor:"black", color:"white"}} onClick={() => setColor("Black")}>Black</button>

          </nav>

      </div>
    </>
  )
}

export default App
