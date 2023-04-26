'use client'
import { redirect } from 'next/dist/server/api-utils'
import styles from './page.module.css'



export default function Inicio() {


  return (
    <div className={styles.home} >
    <div className={styles.principal} >
      {/* <h2 style={{margin: "0"}} >Hola, mi nombre es</h2> */}
      <h1 className={styles.titulo} style={{width:"400px"}} >Desarrollador Full stack</h1>
      {/* <h1 style={{"fontSize": "2.5rem","color": "yellow", "margin": "0"}} >Soy un Desarrollador full stack</h1> */}
      <p style={{"fontSize": "1.2rem", "margin": "0"}} >
        Con experiencia en tecnologías como React, Next.js, Angular, Typescript, Bootstrap y Vue; Node, Express y PostgreSQL.
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
        
       
      </div>
      </div>
      </div> */}
      <div className={styles.contact} style={{width: "300px", marginLeft: "270px", marginTop: "70px"}} >
       
       
       
              
              

      
      </div>
      </div>
      
      </div>
  )
}
