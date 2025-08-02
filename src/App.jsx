import { useState } from 'react'
import Header from './component/header'
import Mainpage from"./component/Mainpage"
import Footer from './component/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Header/>
<Mainpage/>
<Footer/>
     
      
    </>
  )
}

export default App
