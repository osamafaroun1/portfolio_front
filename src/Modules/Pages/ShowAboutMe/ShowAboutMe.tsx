import { useState } from "react"
import AbouteMe from "../../Components/AboutMe/AbouteMe"
import ReadMore from './../../Components/RradMore/ReadMore'



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