'use client'
import { redirect } from 'next/dist/server/api-utils'
import styles from './page.module.css'



export default function Inicio() {

  function redir (){
    redirect("https://docs.google.com/document/d/1e0N9N7W-nonX_WQOkqq902v4x7ticOlaN2rKp5lsnTI/edit")
  }

  return (
    <div className={styles.home} >
    <div className={styles.principal} >
      <h2 style={{margin: "0"}} >Hola, mi nombre es</h2>
      <h1 className={styles.titulo} >Joaquín Ocampo</h1>
      <h1 style={{"fontSize": "2.5rem","color": "yellow", "margin": "0"}} >Soy un Desarrollador full stack</h1>
      <p style={{"fontSize": "1.2rem", "margin": "0"}} >graduado en Henry, 
        donde he usado tecnologías como React, Express, etc. Constantenmente estoy buscando 
        conocimientos nuevos al igual que experiencia. Disfrutando de mi viaje por el mundo
        del desarrollo web.
      </p>
     
       {/* <div className={styles.contacto} >
        <div>
        <h2>Contáctame:</h2>
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
      </div> */}
      <div style={{width: "300px", marginLeft: "250px", marginTop: "20px"}} >
       
        <a className={styles.botonCV} href='https://drive.google.com/file/d/1f3pVwF_jqAPOjctcjVu2HQ3vrMdH7JE-/view' style={{color: "white", textDecoration: "none"}} >Mira mi Curriculum</a>
      
      </div>
      </div>
      
      </div>
  )
}
