'use client'
import Link from 'next/link'
import styles from './Navigation.module.css'


const links = [
    {   label: 'Sobre mi', route: 'about' },
    { label: 'Habilidades', route: 'skill'},
    { label: 'Proyectos', route: 'proyecto' },
  ]
  


export function Navigation ()  {
  console.log(document)
  const navo = document.getElementById('navo')

  if(typeof window !== 'undefined'){
    let ubiPrincipal = window.pageYOffset
    window.addEventListener('scroll', function(){
      const ubiActual = window.pageYOffset
      
      if(ubiPrincipal >= ubiActual){
        navo.style.top = '0'
      }
      else {
        navo.style.top = '-100px'
      }
      ubiPrincipal = ubiActual
  
    })
  }

  function redir(e){
    if(typeof window !== 'undefined'){
      if(e.target.value === 'proyecto') window.scrollTo(0,1800)
      if(e.target.value === 'about') window.scrollTo(0,500)
      if(e.target.value === 'skill') window.scrollTo(0,790)
      navo.style.top = '-100'
      
    }
  }
  
    return(
        <header className={styles.header} >
          
          <nav className={styles.naviagtion} style={{top: "0"}} id='navo' >
            <div className={styles.logo} ></div>
            <ul style={{"display": "flex", "justifyContent": "space-between", "gap": "43px", listStyle: "none"}} >
              {links.map(({label, route}) => {
                return(
                <li key={route} >
                  <button className={styles.boton} onClick={redir} value={route} >{label}</button>
                </li>
                )
              })}
            </ul>
          </nav>
        </header>
    )
}
// export Navigation