import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [jokes,setJokes] = useState([])
   useEffect(()=>{
    axios.get("/api/jokes")
    .then((response)=>{
       setJokes(response.data)
    })
    .catch((error)=>{
       console.error("Error fetching data", error)
     })
   })
  return (
    <>
    <h1>hello</h1>
      <p>JOKES :{jokes.length}</p>
      {
        jokes.map((joke,index) => (
          <div key = {index}>
            <h3>{joke}</h3>
          </div>
        ))
      }
    </>
  )
}

export default App
