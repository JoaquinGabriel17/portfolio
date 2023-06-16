import './globals.css'
import {Navigation} from './components/navigation/Navigation'
import {Perfil} from './components/perfil/Perfil'
import {Proyecto} from './components/proyecto/Proyecto'
import { Skills } from './components/skills/Skills'
import baki from './icons/pexels-pixabay-268533.jpg'

export default function RootLayout({ children }) {

  
  return (
    <html className='primer' lang="en">

    
      <body>
      
        <Navigation></Navigation>
         {/* <div className="baco" >
          <h1>asdlaksjd</h1>
          </div> */}
          {/* <img src={baki} ></img> */}
        
        {/* <marquee style={{color: "red", backgroundColor: "white", fontSize: "2rem"}} >layout principal</marquee> */}
        {children}
        <br></br>
        <Perfil></Perfil>
        <Skills></Skills>
        <Proyecto></Proyecto>
        
      </body>
    </html>
  )
}
