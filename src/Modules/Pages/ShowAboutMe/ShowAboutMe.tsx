import { useState } from "react"
import ReadMore from './../../Components/RradMore/ReadMore'
import AbouteMe from "../../Components/AboutMe/AboutMe"
const ShowAboutMe = () => {
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

export default ShowAboutMe