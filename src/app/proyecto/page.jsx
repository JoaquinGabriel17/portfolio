'use client'
import styles from './proyecto.module.css'
import { useState } from 'react'
import pi from './img/proyecto individual.png'
import rym from './img/rick and morty.png'
import Link from 'next/link'
export default function Proyecto(){
    const [mostrar, setMostrar] = useState(false)
    const [ mostrar1, setMostrar1 ] = useState(false)
    const [ mostrar2, setMostrar2 ] = useState(false)

    function show(e){
        if(e.target.value === 'rym') setMostrar(!mostrar)
        if(e.target.value === 'pi') setMostrar1(!mostrar1)
        if(e.target.value === 'pf') setMostrar2(!mostrar2)
    }
    return(
        <div  className={styles.contain}>
            <h1 className={styles.titulo} >Proyectos</h1>
        <div className={styles.proyecto} >

        <div className={styles.single} >
            <h2 style={{textDecoration: "underline"}} >Proyecto Final(Henry)</h2>
            {/* <img src={pi} style={{"height": "8rem", "width": "20rem"}} alt="PI" /> */}
            <div className={styles.pf} ></div>
            <button className={styles.boton} onClick={show} value='pf' >Funciones</button>
            { mostrar2 ? 
            <ul className={styles.lista} >
                <li>Pasarela de pago (mercadopago)</li>
                <li>Filtros y Ordenamiento alfabetico</li>
                <li>Sistema de usuarios</li>
                <li>Logeo con Github</li>
                <li>Reservas con animacion 3D</li>
                <li>Dashboard para administradores</li>
            </ul> : ''}
            <br></br>
            <br></br>
            <br></br>
            <Link href='https://p-fhenry-front.vercel.app/' className={styles.link} >Visitá esta página</Link>
            </div>

            <div className={styles.single} >
            <h2 style={{textDecoration: "underline"}} >Proyecto Individual (Henry)</h2>
            {/* <img src={pi} style={{"height": "8rem", "width": "20rem"}} alt="PI" /> */}
            <div className={styles.image} ></div>
            <button className={styles.boton} onClick={show} value='pi' >Funciones</button>
            { mostrar1 ? 
            <ul className={styles.lista} >
                <li>Busqueda por nombre y por ID</li>
                <li>Filtros</li>
                <li>Ordenamiento alfabetico</li>
                <li>Formulario controlado para crear recetas</li>
            </ul>
: ''}
            </div>
            <div className={styles.single} >
            <h2 style={{textDecoration: "underline"}} >Rick and Morty</h2>
            {/* <img src={rym} style={{"height": "8rem", "width": "20rem", "opacity": "1"}} alt="RYM" ></img> */}
            <div className={styles.rym} ></div>
            <button className={styles.boton} onClick={show} value='rym' >Funciones</button>
            { mostrar ? 
            <ul className={styles.lista}>
                <li>Busqueda por nombre y por ID</li>
                <li>Filtros</li>
                <li>Ordenamiento alfabetico</li>
                <li>Formulario controlado de inicio de sesion</li>
            </ul> : '' }
            
            </div>
        </div>
        </div>
    )
}