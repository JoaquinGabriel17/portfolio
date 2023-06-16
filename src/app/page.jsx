'use client'
import { redirect } from 'next/dist/server/api-utils'
import styles from './page.module.css'
// import pic from '../app/icons/UN\ OCAMPO'
import baki from './icons/pexels-pixabay-268533.jpg'



export default function Inicio() {


  return (
    <div className={styles.home} >
        
        
      <div className={styles.backg} ></div>
    <div className={styles.principal} >
      {/* <h2 style={{margin: "0"}} >Hola, mi nombre es</h2> */}
      <div className={styles.image} ></div>
      <h1 className={styles.titulo} style={{width:"400px"}} >Desarrollador Full stack</h1>
      {/* <h1 style={{"fontSize": "2.5rem","color": "yellow", "margin": "0"}} >Soy un Desarrollador full stack</h1> */}
      <p style={{"fontSize": "1.2rem", "margin": "0"}} >
        Con experiencia en React, Next.js, Angular, Typescript, Bootstrap y Vue; Node, Express y PostgreSQL.
      </p>
      <div className={styles.contact} style={{width: "300px", marginLeft: "270px", marginTop: "70px"}} >
      </div>
      </div>
      </div>
  )
}
