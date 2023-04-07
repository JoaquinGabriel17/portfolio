import Link from 'next/link'
import styles from './Navigation.module.css'


const links = [
    {   label: 'Home', route: '/' },
    { label: 'Proyectos', route: '/proyecto' },
    { label: 'Perfil', route: '/perfil'}
  ]

export function Navigation ()  {
    return(
        <header className={styles.header} >
          
          <nav className={styles.naviagtion} >
            <ul style={{"display": "flex", "justifyContent": "space-between", "gap": "43px"}} >
              {links.map(({label, route}) => {
                return(
                <li key={route} >
                  <Link className={styles.link} href={route}>{label}</Link>
                </li>
                )
              })}
            </ul>
          </nav>
        </header>
    )
}
// export Navigation