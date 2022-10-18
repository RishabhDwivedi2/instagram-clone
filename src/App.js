import React, {useState} from 'react'
import First from './components/First'
import Second from './components/Second'

function App() {
  const [firstState, setFirstState] = useState(false)
  
  const firstClick =() =>{
    setFirstState(!firstState)
  }
  return (
    <div>
      {firstState ? <Second /> : <First firstClick ={firstClick} 
                                   myState = {!firstState}/>}
    </div>
  )
}

export default App