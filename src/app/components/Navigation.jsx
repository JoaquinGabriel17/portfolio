'use client'
import Link from 'next/link'
import styles from './Navigation.module.css'


const links = [
    {   label: 'Sobre mi', route: 'about' },
    { label: 'Habilidades', route: 'skill'},
    { label: 'Proyectos', route: 'proyecto' },
  ]
  let b = 0


export function Navigation ()  {
  if(typeof document !== "undefined") {
    const navo = document.getElementById('navo')
  }

  if(typeof window !== 'undefined' && typeof document !== 'undefined'){
    let ubiPrincipal = window.pageYOffset
    window.addEventListener('scroll', function(){
      const ubiActual = window.pageYOffset
      
      if(ubiPrincipal >= ubiActual){
        if(typeof navo !== 'undefined' && b === 0) navo.style.top = '0'
      }
      else {
        if(typeof navo !== 'undefined'){
           navo.style.top = '-100px'
          b = 0
        }
      }
      ubiPrincipal = ubiActual
  
    })
  }

  function redir(e){
    if(typeof window !== 'undefined'){
      if(e.target.value === 'proyecto') window.scrollTo(0,1800)
      if(e.target.value === 'about') window.scrollTo(0,500)
      if(e.target.value === 'skill') window.scrollTo(0,790)
      navo.style.top = '-100px'
      b = 1
      
    }
  }
  
    return(
        <header className={styles.header} >
          
          <nav className={styles.naviagtion} style={{top: "0"}} id='navo' >
            <div className={styles.logo} ></div>
            <div style={{gap: "20px"}} >
              <a style={{margin: '0 10px'}} href='https://www.linkedin.com/in/joaquin-ocampo-a7b213252/'>
                <img className={styles.icono} src='https://cdn-icons-png.flaticon.com/512/174/174857.png' alt="linkedin" ></img>
              </a>
              <a href='https://github.com/JoaquinGabriel17' >
                <img className={styles.icono} src='https://cdn.icon-icons.com/icons2/936/PNG/512/github-logo_icon-icons.com_73546.png' alt="github" ></img>
              </a>
            </div>
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