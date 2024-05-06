
import { useState } from 'react'
import './App.css'
import AbouteMe from './Modules/Pages/AboutMe/AbouteMe'
import ReadMore from './Modules/Components/RradMore/ReadMore'

function App() {

const [showFirstComponent, setShowFirstComponent] = useState<boolean>(true)

const switchComponent = () => {
  setShowFirstComponent(!showFirstComponent)
}
  return (
    <div>
    {
    showFirstComponent?(<AbouteMe onSwitch={switchComponent}/>):(<ReadMore onSwitch={switchComponent}/>)
    }
    </div>
  )

}
export default App
