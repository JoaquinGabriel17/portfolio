import './globals.css'
import {Navigation} from './components/Navigation'

export default function RootLayout({ children }) {
  return (
    <html className='primer' lang="en">
    
      <body>
        
        <Navigation></Navigation>
        {/* <marquee style={{color: "red", backgroundColor: "white", fontSize: "2rem"}} >layout principal</marquee> */}
        {children}
      </body>
    </html>
  )
}
