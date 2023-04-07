
import styles from './page.module.css'



export default function Home() {
  return (
    <div className={styles.home} >
    <div className={styles.principal} >
      <h1 className={styles.titulo} >Joaquin Ocampo</h1>
      <p style={{"fontSize": "1.2rem"}} >Hola! Soy Joaquin Ocampo, full stack developer graduado en Henry, 
        actualmente me encuentro buscando trabajo. Disfruto programando y quiero empezar a ganar experiencia para
        poder expandir mis conocimientos y formar mi perfil profesional.
      </p>
      <div className={styles.contacto} >
        <div>
        <h2>Contactame:</h2>
          <h3>celular: +54 11 44030901</h3>
          <h3>joaquingabriel3@hotmail.com</h3>
        </div>
        <div>
      <h2 className={styles.contacto} >Mis redes:</h2>
      <div className={styles.link} >
        
        <a className={styles.link} href='https://www.linkedin.com/in/joaquin-ocampo-a7b213252/'>
          <img className={styles.icono} src='https://cdn-icons-png.flaticon.com/512/174/174857.png' alt="linkedin" ></img>
        </a>
      </div>
      </div>
      </div>
      </div>
      </div>
  )
}
