import { useState } from "react"
import AbouteMe from "../../Components/AboutMe/AboutMe"
import ReadMore from '../../Components/ReadMore/ReadMore'



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