import './globals.css'
import {Navigation} from './components/Navigation'
import {Perfil} from './components/Perfil'
import {Proyecto} from './components/Proyecto'
import { Skills } from './components/Skills'

export default function RootLayout({ children }) {

  
  return (
    <html className='primer' lang="en">
    
      <body>
      
        <Navigation></Navigation>
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
