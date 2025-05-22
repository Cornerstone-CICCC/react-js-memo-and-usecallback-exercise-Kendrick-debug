import { useState } from 'react'
import './App.css'
import Profile from './components/Profile'
import ProductLIst from './components/ProductLIst'

function App() {
  const [count, setCount] = useState<number>(0)
  const firstname = "john"
  const lastname = "smith"



  return (
    <>
    <h1>Count: {count}</h1>
    <button onClick={() => setCount(prev => prev + 1)}>Increase By One</button>
     

    <Profile firstname={firstname} lastname={lastname}/>
    <ProductLIst />

    </>
  )
}

export default App
